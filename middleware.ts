import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./lib/actions/adminAuth.action";

export default async function middleware(request: NextRequest) {
  // const token = await getSession();
  const token = true;
  const pathname = request.nextUrl.pathname;

  const protectedRoutes = ["/admin"];
  const protectAuthRoutes = ["/login-admin"];

  console.log(token, "token");

  if (!token) {
    console.log("token not found");

    if (protectedRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL("/login-admin", request.url));
    }
  } else if (protectAuthRoutes.some((route) => pathname.startsWith(route))) {
    console.log("token found");
    return NextResponse.redirect(new URL("/admin/businesses", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/login-admin",
    "/admin",
  ],
};
