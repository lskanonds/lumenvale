import { draftMode } from 'next/headers'

/*
  Leaves draft mode. Without this the preview cookie outlives the editing session, and an
  editor would keep seeing unpublished drafts while believing they were looking at the
  live site.
*/

export async function GET(): Promise<Response> {
  const draft = await draftMode()
  draft.disable()

  return new Response('Preview mode off. This browser now sees the published site.', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  })
}
