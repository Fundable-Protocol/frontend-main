import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const walletConnected = req.cookies.get("walletConnected")?.value === "true";

  console.log("walletConnected:", walletConnected);

  const { pathname } = req.nextUrl;

  console.log("pathName:", pathname);
  // if (walletConnected && pathname === "/") {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }

  // if (!walletConnected && pathname.startsWith("/dashboard")) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  return NextResponse.next();
}
// "/dashboard/:path*";
export const config = {
  matcher: ["/"],
};
