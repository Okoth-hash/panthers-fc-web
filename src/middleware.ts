import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // This is where we will link your "FIRE" button status.
  // If set to true, the user is blocked from Technical data.
  const isStaffFired = false; 

  if (request.nextUrl.pathname.startsWith('/technical')) {
    if (isStaffFired) {
      // Send them back to the Vision/Mission page if they are fired
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
}

export const config = {
  matcher: '/technical/:path*',
}