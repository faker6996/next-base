import { NextRequest, NextResponse } from 'next/server';
import { middlewarePipeline } from './lib/middlewares/pipeline';
import { withRoleGuard } from './lib/middlewares/role-guard';

import {
  withCors,
  withLogger,
  withAuth,

} from './lib/middlewares';
import { withRateLimit } from './lib/middlewares/rate-limit';

export function middleware(req: NextRequest) {
  let res = middlewarePipeline(req, [
    withCors,
    withRateLimit,
    withLogger,
    withAuth,
  ]);

  // Chặn quyền cho /admin sau khi đã auth
  if (req.nextUrl.pathname.startsWith('/admin')) {
    res = withRoleGuard(req, res, ['admin']);
  }

  return res;
}

export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*', '/admin/:path*'],
};
