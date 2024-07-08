import { NextRequest, NextResponse } from "next/server";
import { authService } from "../service";

export default function AuthMiddleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    if (null === token) {
        authService.getUser(token)
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next();
}