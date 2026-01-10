import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 1. Check if the 'isStaffFired' cookie is set to true
  const isStaffFired = request.cookies.get('isStaffFired')?.value === 'true';
  
  const { pathname } = request.nextUrl;

  // 2. Define which paths are "Staff Only"
  const isStaffRoute = pathname.startsWith('/technical') || pathname.startsWith('/medical');

  // 3. Logic: If they are trying to enter a staff area but are fired, kick them out
  if (isStaffRoute && isStaffFired) {
    // Redirect to the public home page
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Allow the request to continue if they aren't fired
  return NextResponse.next();
}

// 4. The Matcher tells Next.js which URLs to run this bouncer check on
export const config = {
  matcher: [
    '/technical/:path*',
    '/medical/:path*',
  ],
}