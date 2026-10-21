import { notFound } from 'next/navigation'

/*
  A not-found.tsx inside a route group only handles explicit notFound() calls from that
  group; unmatched URLs would get the framework's bare 404 without the header and footer.
  This catch-all pulls them into the (frontend) layout with a real 404 status. It is the
  least specific route in the app, so /admin and /api still win.

  Prerendered with an empty param list and dynamicParams off, so a stray URL is served the
  built 404 and never reaches the database.
*/
export const dynamicParams = false

export function generateStaticParams() {
  return []
}

export default function CatchAllNotFound() {
  notFound()
}
