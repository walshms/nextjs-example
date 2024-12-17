import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    const token = request.nextauth.token;

    // Shouldn't get this far without a token, but hey.
    if (!token) {
      return NextResponse.redirect(new URL("/api/auth/signin", request.url));
    }

    // User is authenticated but not registered.
    if (!token.user.roles || !token.user.roles.length) {
      return NextResponse.rewrite(new URL("/unregistered", request.url));
    }

    // Users is the Admin landing page.
    if (request.nextUrl.pathname === "/admin") {
      return NextResponse.redirect(new URL("/admin/users", request.url));
    }

    // Preferences is the Account landing page.
    if (request.nextUrl.pathname === "/account") {
      return NextResponse.redirect(new URL("/account/preferences", request.url));
    }

    // Only Merchant, Final Approver, and Admin allowed to compare offers
    if (request.nextUrl.pathname.includes("/offer-comparison")) {
      return NextResponse.redirect(new URL("/offers", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);
