"use client";

import * as React from "react";
import {
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/user/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Student",
      url: "/user/dashboard/students",
      icon: Bot,
      items: [
        {
          title: "My Profile",
          url: "/user/dashboard/student-profile",
        },
        {
          title: "Update Profile",
          url: "/user/dashboard/update-student-profile",
        },
        {
          title: "My Booking",
          url: "/user/dashboard/student-bookings",
        },
      ],
    },
    {
      title: "Teacher",
      url: "/user/dashboard/teacher",
      icon: Bot,
      items: [
        {
          title: "My Profile",
          url: "/user/dashboard/teacher-profile",
        },
        {
          title: "Update Profile",
          url: "/user/dashboard/update-teacher-profile",
        },
        {
          title: "Manage Booking",
          url: "/user/dashboard/teacher-bookings",
        },
        {
          title:"Total Earnings",
          url:"/user/dashboard/total-earning"
        }
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                {/* <div className="flex items-center justify-center">
                  logo
                </div> */}
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">TutorConnect</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}