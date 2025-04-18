import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from './services/AuthService';

const authRoutes = ['/login-user', '/register-student', '/register-teacher'];

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo = await getCurrentUser();
  console.log('userinfo', userInfo);

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login-user?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
};

export const config = {
  matcher: ['/browseTutor/:id'],
};
