import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const walletConnected =
    req["cookies"].get("isPrevConnected")?.value === "true";

  const { pathname } = req.nextUrl;

  if (walletConnected && pathname === "/") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (!walletConnected && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
// "/dashboard/:path*";
export const config = {
  matcher: ["/", "/admin", "/admin/:path*"],
};
