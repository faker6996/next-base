import { NextRequest, NextResponse } from 'next/server';

export function withAuth(req: NextRequest, res: NextResponse): NextResponse {
  const token = req.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return res;
}
