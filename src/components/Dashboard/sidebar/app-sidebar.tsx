'use client';

import * as React from 'react';
import {
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  SquareTerminal,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavMain } from './nav-main';
import { NavUser } from './nav-user';
import Link from 'next/link';
import { getCurrentUser } from '@/services/AuthService'; // 🔁 assumes async function to fetch user info

const fullNavData = {
  navMain: [
    {
      title: 'Student',
      role: 'student',
      url: '/student',
      icon: Bot,
      items: [
        { title: 'My Profile', url: '/student/student-profile' },
        { title: 'Update Profile', url: '/student/update-student-profile' },
        { title: 'Manage Booking', url: '/student/student-bookings' },
      ],
    },
    {
      title: 'Teacher',
      role: 'teacher',
      url: '/teacher',
      icon: Bot,
      items: [
        { title: 'Teacher Profile', url: '/teacher/teacher-profile' },
        {
          title: 'Update Teacher Profile',
          url: '/teacher/update-teacher-profile',
        },
        { title: 'Manage Booking', url: '/teacher/teacher-bookings' },
        { title: 'Total Earnings', url: '/teacher/total-earnings' },
        { title: 'Schedule', url: '/teacher/schedule' },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [user, setUser] = React.useState<{
    role: 'student' | 'teacher';
  } | null>(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  const filteredNav = fullNavData.navMain.filter(
    (item) => item.role === user?.role
  );

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">TutorConnect</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {user ? (
          <NavMain items={filteredNav} />
        ) : (
          <p className="px-4">Loading...</p>
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
