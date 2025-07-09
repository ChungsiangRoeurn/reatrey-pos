"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  GalleryVerticalEnd,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "@/components/layout/team-switchers";
import { NavMain } from "@/components/layout/nav-main";
import { NavUser } from "@/components/layout/nav-user";

const data = {
  teams: [
    {
      name: "Reatrey-POS",
      logo: PieChart,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: PieChart,
      isActive: true,
    },
    {
      title: "Sales",
      url: "/sales",
      icon: SquareTerminal,
      items: [
        { title: "New Sale", url: "/sales/new" },
        { title: "Invoices", url: "/sales/invoices" },
        { title: "Returns", url: "/sales/returns" },
      ],
    },
    {
      title: "Products",
      url: "/products",
      icon: GalleryVerticalEnd,
      items: [
        { title: "All Products", url: "/products" },
        { title: "Categories", url: "/products/categories" },
        { title: "Stock", url: "/products/stock" },
      ],
    },
    {
      title: "Customers",
      url: "/customers",
      icon: BookOpen,
      items: [
        { title: "Customer List", url: "/customers" },
        { title: "Groups", url: "/customers/groups" },
      ],
    },
    {
      title: "Reports",
      url: "/reports",
      icon: AudioWaveform,
      items: [
        { title: "Sales Report", url: "/reports/sales" },
        { title: "Inventory Report", url: "/reports/inventory" },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        { title: "General", url: "/settings/general" },
        { title: "Taxes", url: "/settings/taxes" },
        { title: "Payment Methods", url: "/settings/payments" },
      ],
    },
  ],
  user: {
    name: "Admin",
    email: "reatreyapp@gmail.com",
    avatar: "/avatars/admin.jpg",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
