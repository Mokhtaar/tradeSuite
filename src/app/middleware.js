export { default } from "next-auth/middleware";

// export const config = { matcher: ["/Dashboard/:path*"] };

import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "http://localhost:3000/Dashboard/:path*",
};
