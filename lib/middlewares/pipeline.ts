import { NextRequest, NextResponse } from 'next/server';

export type Middleware = (req: NextRequest, res: NextResponse) => NextResponse;

/**
 * Chạy chuỗi middleware giống .NET app.Use(x).Use(y)...
 */
export function middlewarePipeline(
  req: NextRequest,
  middlewares: Middleware[]
): NextResponse {
  return middlewares.reduce((res, fn) => fn(req, res), NextResponse.next());
}
