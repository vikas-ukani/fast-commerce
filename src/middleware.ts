
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import AuthMiddleware from './middleware/AuthMiddleware';

export async function middleware(req: NextRequest) {
    console.log('Middleware',)
    // Run the authMiddleware for specific routes
    if (req.nextUrl.pathname.startsWith('/auth')) {
        return AuthMiddleware(req);
    }

    // If the request is not for a protected route, continue to the next middleware
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};