import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from './services/AuthService';

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ['/login-user', '/register-student', '/register-teacher'];

const roleBasedPrivateRoutes = {
  student: [/^\/student/],
  teacher: [/^\/teacher/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo = await getCurrentUser();

  // Unauthenticated user
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login-user?redirectPath=${pathname}`, request.url)
      );
    }
  }

  // Authenticated user
  const role = userInfo.role as Role;

  if (roleBasedPrivateRoutes[role]) {
    const restrictedRoutes = roleBasedPrivateRoutes[role];

    const isAllowed = restrictedRoutes.some((route) => pathname.match(route));
    if (isAllowed) {
      return NextResponse.next(); // route is valid for this role
    }

    // Prevent user from accessing other roles' paths
    const allRoles = Object.keys(roleBasedPrivateRoutes) as Role[];
    const otherRoles = allRoles.filter((r) => r !== role);
    const isAccessingOtherRole = otherRoles.some((r) =>
      pathname.startsWith(`/${r}`)
    );

    if (isAccessingOtherRole) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // All other authenticated routes (like /browseTutor/:id) are allowed
  return NextResponse.next();
};

export const config = {
  matcher: [
    '/browseTutor/:id*',
    '/login-user',
    '/register-student',
    '/register-teacher',
    '/teacher',
    '/teacher/:page*',
    '/student',
    '/student/:page*',
  ],
};
