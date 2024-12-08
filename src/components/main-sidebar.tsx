"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Gamepad2, Trophy, Users, Star, ScrollText, MessageSquare, Handshake, Shield, HeadphonesIcon, Globe, Menu } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const mainNavItems = [
  {
    title: "Casino",
    icon: Gamepad2,
    href: "/casino",
  },
  {
    title: "Sports",
    icon: Trophy,
    href: "/sports",
  },
  {
    title: "Promotions",
    icon: Star,
    href: "/promotions",
  },
  {
    title: "Affiliate",
    icon: Users,
    href: "/affiliate",
  },
  {
    title: "VIP Club",
    icon: Trophy,
    href: "/vip",
  },
  {
    title: "Blog",
    icon: ScrollText,
    href: "/blog",
  },
  {
    title: "Forum",
    icon: MessageSquare,
    href: "/forum",
  },
  {
    title: "Sponsorships",
    icon: Handshake,
    href: "/sponsorships",
  },
  {
    title: "Responsible Gambling",
    icon: Shield,
    href: "/responsible-gambling",
  },
  {
    title: "Live Support",
    icon: HeadphonesIcon,
    href: "/support",
  },
]

export function MainSidebar() {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar className="border-r border-zinc-800">
        <SidebarHeader className="h-16 border-b border-zinc-800">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-4 w-4" />
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {mainNavItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  className="flex w-full items-center gap-2 px-4 py-2"
                >
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton className="flex w-full items-center gap-2 px-4 py-2">
                <Globe className="h-4 w-4" />
                <span>Language: English</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

