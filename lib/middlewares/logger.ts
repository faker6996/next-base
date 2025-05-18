import { NextRequest, NextResponse } from 'next/server';

export function withLogger(req: NextRequest, res: NextResponse): NextResponse {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.nextUrl.pathname}`);
  return res;
}
