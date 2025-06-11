import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabase } from "./lib/supabase";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the user is authenticated
  const { data: { session } } = await supabase.auth.getSession();
  const isAuthenticated = !!session;

  // Define protected routes
  const protectedRoutes = /^\/dashboard(\/.*)?$/;

  // Handle protected routes
  if (protectedRoutes.test(pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Handle login/signup pages after authentication
  if ((pathname === "/login" || pathname === "/signup") && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Inactivity timeout logic
  if (isAuthenticated && protectedRoutes.test(pathname)) {
    let activityTimeout: NodeJS.Timeout;

    // Reset timeout on any activity (e.g., page navigation)
    const resetTimeout = () => {
      clearTimeout(activityTimeout);
      activityTimeout = setTimeout(async () => {
        await supabase.auth.signOut();
        return NextResponse.redirect(new URL("/login", request.url));
      }, 60000); // 60 seconds
    };

    resetTimeout();

    // Listen for activity (e.g., mouse move, key press)
    request.cookies.set("activityTimeout", "active");
    const handleActivity = () => resetTimeout();
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keypress", handleActivity);

    // Cleanup on route change
    request.nextUrl.searchParams.set("cleanup", "true");
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup", "/reset-password"],
};