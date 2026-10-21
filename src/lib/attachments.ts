/*
  Documents attached to an enquiry.

  Owners attach monitoring exports and O&M reports, which can be commercially sensitive.
  They are never written to disk, the database or the blob store: the file is read into
  memory, put on the notification email, and dropped when the request ends. Storing them
  in the Media collection would have put them behind a public URL.

  The enquiry record keeps only the filename and size, which is enough to know a document
  was sent and to ask for it again if the email failed.

  Pure functions with no Node APIs, so the rules can be tested without a server.
*/

/** Total across all files. Vercel rejects request bodies over 4.5 MB, and that cannot be raised. */
export const MAX_TOTAL_BYTES = 3.5 * 1024 * 1024
export const MAX_FILES = 2

/*
  Both the extension and the media type have to be on the list. The media type is whatever
  the browser chose to send, so it is a claim rather than evidence; checking both narrows
  what can be handed to the recipient's mail client. Nothing here is ever executed or
  served by the site.
*/
const ACCEPTED: Record<string, string[]> = {
  '.pdf': ['application/pdf'],
  '.xlsx': ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  '.xls': ['application/vnd.ms-excel'],
  '.csv': ['text/csv', 'application/csv', 'text/plain'],
  '.png': ['image/png'],
  '.jpg': ['image/jpeg'],
  '.jpeg': ['image/jpeg'],
}

/** For the file input's `accept`, so the picker shows the right files by default. */
export const ACCEPT_ATTRIBUTE = Object.keys(ACCEPTED).join(',')

export const ACCEPTED_LABEL = 'PDF, Excel, CSV or an image'

const extensionOf = (filename: string) => {
  const dot = filename.lastIndexOf('.')
  return dot === -1 ? '' : filename.slice(dot).toLowerCase()
}

/*
  The filename ends up in an email header and in someone's downloads folder, so it is
  rebuilt rather than trusted: path separators and control characters removed, length
  capped, and the extension re-appended from the allowlist so the name always matches the
  type that was accepted.
*/
export const safeFilename = (filename: string, extension: string) => {
  const base = filename
    .slice(0, filename.length - extensionOf(filename).length)
    .replace(/[/\\]/g, ' ')
    // Nulls, and the bidirectional overrides that make "exe.fdp" render as "pdf.exe".
    .replace(/[\u0000-\u001f\u007f-\u009f\u200e\u200f\u202a-\u202e]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80)

  return `${base || 'document'}${extension}`
}

export const formatBytes = (bytes: number) =>
  bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.ceil(bytes / 1024)} KB`

export type AcceptedFile = { filename: string; size: number }

export type AttachmentCheck = { ok: true; files: AcceptedFile[] } | { ok: false; error: string }

/**
 * Applies every rule to the set of files as a whole. Metadata only: the caller reads the
 * bytes, and only after this has accepted them.
 */
export const checkAttachments = (
  candidates: { name: string; size: number; type: string }[],
): AttachmentCheck => {
  const present = candidates.filter((file) => file.size > 0)
  if (present.length === 0) return { ok: true, files: [] }

  if (present.length > MAX_FILES) {
    return { ok: false, error: `Please attach no more than ${MAX_FILES} files.` }
  }

  const files: AcceptedFile[] = []
  for (const file of present) {
    const extension = extensionOf(file.name)
    const types = ACCEPTED[extension]

    if (!types || !types.includes(file.type)) {
      return { ok: false, error: `${ACCEPTED_LABEL} only. “${file.name}” is not one of those.` }
    }

    files.push({ filename: safeFilename(file.name, extension), size: file.size })
  }

  const total = files.reduce((sum, file) => sum + file.size, 0)
  if (total > MAX_TOTAL_BYTES) {
    return {
      ok: false,
      // Say what to do next: the enquiry can still be sent without the file.
      error: `That is ${formatBytes(total)} in total and the limit is ${formatBytes(MAX_TOTAL_BYTES)}. Send the enquiry without it and email the document directly.`,
    }
  }

  return { ok: true, files }
}
