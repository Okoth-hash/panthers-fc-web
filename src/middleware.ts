import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isStaffFired = request.cookies.get('isStaffFired')?.value === 'true';
  const hasAccess = request.cookies.get('staff_access')?.value === 'authorized';
  const { pathname } = request.nextUrl;

  // 1. Lockdown check for Technical/Medical
  if ((pathname.startsWith('/technical') || pathname.startsWith('/medical')) && isStaffFired) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 2. Intelligence Center check
  if (pathname.startsWith('/admin/complaints') && !hasAccess) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/technical/:path*', '/medical/:path*', '/admin/complaints/:path*'],
}