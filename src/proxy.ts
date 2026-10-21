import { NextResponse, type NextRequest } from 'next/server'

/*
  Preview deploy hardening.

  With PREVIEW_MODE=1, the admin and the REST/GraphQL API answer 404 and every response
  carries a noindex header. Without the variable this is a no-op, so local development and
  production are unaffected.

  This runs on the edge runtime, where process.env is inlined at build time: PREVIEW_MODE
  has to be set for the build, not only at runtime.

  Named proxy.ts rather than middleware.ts, which Next 16 deprecated.
*/
const PREVIEW = process.env.PREVIEW_MODE === '1'

const HIDDEN_IN_PREVIEW = [/^\/admin(\/|$)/, /^\/api(\/|$)/]

export function proxy(request: NextRequest) {
  if (!PREVIEW) return

  if (HIDDEN_IN_PREVIEW.some((pattern) => pattern.test(request.nextUrl.pathname))) {
    // Rewrite to a path that does not exist, so the catch-all renders the branded 404 with
    // a real 404 status.
    return NextResponse.rewrite(new URL('/not-available-in-preview', request.url))
  }

  const response = NextResponse.next()
  // In addition to the robots meta tag set in the root layout.
  response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive')
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}
