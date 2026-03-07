import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_METHODS = new Set(["GET", "HEAD", "POST", "OPTIONS"]);

export function middleware(request: NextRequest) {
  if (!ALLOWED_METHODS.has(request.method)) {
    return new NextResponse("Method Not Allowed", {
      status: 405,
      headers: {
        Allow: "GET, HEAD, POST, OPTIONS",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
