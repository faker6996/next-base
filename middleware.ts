import { withAuth } from './lib/middlewares/auth';
import { withLogger } from './lib/middlewares/logger';
import { withCors } from './lib/middlewares/cors';
import { withRateLimit } from './lib/middlewares/rate-limit';
import { NextRequest, NextResponse } from 'next/server';
import { withRoleGuard } from './lib/middlewares/role-guard';

export function middleware(req: NextRequest) {
  let res = NextResponse.next();
  res = withCors(req, res);
  res = withRateLimit(req, res);
  res = withLogger(req, res);
  res = withAuth(req, res);

  // Áp dụng phân quyền (chỉ admin được vào dashboard)
  if (req.nextUrl.pathname.startsWith('/admin')) {
    res = withRoleGuard(req, res, ['admin']);
  }

  return res;
}

export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*'],
};
