'use client'

import { RefreshRouteOnSave } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

/*
  Keeps the live preview pane in step with the form beside it.

  While an editor types, the admin posts the working document to the preview iframe. This
  listens for that and refreshes the route, so the server components re-render against
  the autosaved draft and the preview shows the real page.

  Mounted unconditionally: checking draft mode in the root layout would make every page
  dynamic. The listener is tiny and does nothing unless the admin is posting to it.
*/
export function LivePreviewListener() {
  const router = useRouter()

  // The admin runs in this same app, so messages are only accepted from this origin.
  // Empty during server rendering, where there is nothing to listen to.
  const serverURL = typeof window === 'undefined' ? '' : window.location.origin

  return <RefreshRouteOnSave refresh={() => router.refresh()} serverURL={serverURL} />
}
