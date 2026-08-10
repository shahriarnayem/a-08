import {
  getSessionCookie,
} from "better-auth/cookies";

import {
  NextResponse,
} from "next/server";

export function proxy(request) {
  const {
    pathname,
  } = request.nextUrl;

  const sessionCookie =
    getSessionCookie(request);

  const isPrivateRoute =
    pathname.startsWith("/tile/") ||
    pathname.startsWith("/my-profile");

  if (
    isPrivateRoute &&
    !sessionCookie
  ) {
    const loginUrl =
      new URL(
        "/login",
        request.url
      );

    loginUrl.searchParams.set(
      "redirect",
      pathname
    );

    return NextResponse.redirect(
      loginUrl
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/tile/:path*",
    "/my-profile/:path*",
  ],
};