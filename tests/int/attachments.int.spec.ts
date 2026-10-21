import { describe, expect, it } from 'vitest'
import {
  MAX_FILES,
  MAX_TOTAL_BYTES,
  checkAttachments,
  formatBytes,
  safeFilename,
} from '@/lib/attachments'

/*
  The rules that decide what an anonymous visitor can put in someone's inbox. They run
  before anything is written or sent, and they are pure functions, so they are tested
  directly rather than through the form.
*/

const file = (name: string, type: string, size = 1024) => ({ name, size, type })

const PDF = 'application/pdf'
const XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

describe('checkAttachments', () => {
  it('accepts no files at all, since the field is optional', () => {
    expect(checkAttachments([])).toEqual({ ok: true, files: [] })
  })

  it('ignores the empty File an untouched picker submits', () => {
    expect(checkAttachments([file('', 'application/octet-stream', 0)])).toEqual({
      ok: true,
      files: [],
    })
  })

  it('accepts the documents the owner form asks for', () => {
    const result = checkAttachments([
      file('Monitoring export June 2026.pdf', PDF),
      file('O&M log.xlsx', XLSX),
    ])

    expect(result.ok).toBe(true)
    expect(result.ok && result.files.map((f) => f.filename)).toEqual([
      'Monitoring export June 2026.pdf',
      'O&M log.xlsx',
    ])
  })

  it('refuses a file whose extension is not on the list', () => {
    const result = checkAttachments([file('accounts.exe', 'application/octet-stream')])

    expect(result.ok).toBe(false)
    expect(result.ok === false && result.error).toContain('accounts.exe')
  })

  // The media type comes from the browser, so it is a claim rather than evidence. An
  // executable renamed to .pdf must not pass on the strength of its new extension.
  it('refuses an accepted extension carrying an unexpected media type', () => {
    expect(checkAttachments([file('accounts.pdf', 'application/x-msdownload')]).ok).toBe(false)
  })

  it('refuses more files than the limit', () => {
    const many = Array.from({ length: MAX_FILES + 1 }, (_, i) => file(`report-${i}.pdf`, PDF))

    const result = checkAttachments(many)
    expect(result.ok).toBe(false)
    expect(result.ok === false && result.error).toContain(String(MAX_FILES))
  })

  it('refuses on total size, not per file, and says the enquiry can still be sent', () => {
    const half = Math.ceil(MAX_TOTAL_BYTES * 0.6)
    const result = checkAttachments([file('a.pdf', PDF, half), file('b.pdf', PDF, half)])

    expect(result.ok).toBe(false)
    expect(result.ok === false && result.error).toMatch(/email the document directly/i)
  })

  it('accepts a total that sits exactly on the limit', () => {
    expect(checkAttachments([file('a.pdf', PDF, MAX_TOTAL_BYTES)]).ok).toBe(true)
  })
})

describe('safeFilename', () => {
  it('strips directory separators so nothing can suggest a path', () => {
    expect(safeFilename('../../etc/passwd.pdf', '.pdf')).toBe('.. .. etc passwd.pdf')
  })

  // A right-to-left override makes "fdp.exe" render as "exe.pdf" in a mail client. The
  // character has to go, or the extension we validated is not the one the recipient sees.
  it('removes bidirectional overrides and control characters', () => {
    expect(safeFilename('invoice\u202efdp.pdf', '.pdf')).toBe('invoicefdp.pdf')
    expect(safeFilename('a\u0000b.pdf', '.pdf')).toBe('ab.pdf')
  })

  it('re-appends the extension from the allowlist rather than trusting the name', () => {
    expect(safeFilename('report.PDF', '.pdf')).toBe('report.pdf')
  })

  it('never returns a bare extension', () => {
    expect(safeFilename('.pdf', '.pdf')).toBe('document.pdf')
    expect(safeFilename('   .pdf', '.pdf')).toBe('document.pdf')
  })

  it('caps the length of a name that has to fit an email header', () => {
    const long = `${'a'.repeat(300)}.pdf`
    expect(safeFilename(long, '.pdf').length).toBeLessThanOrEqual(84)
  })
})

describe('formatBytes', () => {
  it('reads in the unit a person would use', () => {
    expect(formatBytes(1024)).toBe('1 KB')
    expect(formatBytes(2 * 1024 * 1024)).toBe('2.0 MB')
  })
})
