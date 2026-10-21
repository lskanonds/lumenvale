import config from '@payload-config'
import { draftMode, headers as nextHeaders } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import type { NextRequest } from 'next/server'

/*
  Entry point for draft preview.

  The live preview iframe and the "View on site" button come here first, because the public
  site only renders published documents. This turns on Next's draft mode, which is what
  makes src/lib/cms.ts read drafts.

  Draft mode reveals unpublished work to whoever holds the cookie, so the request must carry
  a valid Payload session. The admin runs on the same origin, so the editor's cookie
  arrives with the iframe request.
*/

export async function GET(request: NextRequest): Promise<Response> {
  const path = request.nextUrl.searchParams.get('path')

  // Same-site paths only. "//example.com" is a valid URL to a browser and would make this
  // an open redirect.
  if (!path || !path.startsWith('/') || path.startsWith('//')) {
    return new Response('A preview path is required, and must be relative to this site.', {
      status: 400,
    })
  }

  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: await nextHeaders() })

  if (!user) {
    return new Response('You must be signed in to the admin to preview drafts.', { status: 403 })
  }

  const draft = await draftMode()
  draft.enable()

  // redirect() works by throwing, so it has to stay outside any try/catch.
  redirect(path)
}
