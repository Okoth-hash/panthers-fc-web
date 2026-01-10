import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // READS THE LOCK STATUS FROM THE ADMIN PANEL
  const isStaffFired = request.cookies.get('isStaffFired')?.value === 'true';

  if (request.nextUrl.pathname.startsWith('/technical')) {
    if (isStaffFired) {
      // REDIRECT TO HOME IF FIRED
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
}

export const config = {
  matcher: '/technical/:path*',
}
