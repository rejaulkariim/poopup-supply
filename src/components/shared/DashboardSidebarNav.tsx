"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

const DashboardSidebarNav = ({ items }: DashboardNavProps) => {
  const path = usePathname();
  return (
    <div className="px-4 h-screen">
      <div className="h-16 px-3 flex items-center">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <Icons.logo className="h-6 w-6" />
          <span className="text-base font-bold">{siteConfig.name}</span>
        </Link>
      </div>

      <div className="grid items-start gap-2">
        {items.map((item, index) => {
          // const Icon = Icons[item.icon || 'arrowRight'];
          return (
            item.href && (
              <Link key={index} href={item.disabled ? "/" : item.href}>
                <span
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    path === item.href ? "bg-accent" : "transparent",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {/* <Icon className="mr-2 h-4 w-4 text-muted-foreground" /> */}
                  <span className="text-sm text-muted-foreground">
                    {item.title}
                  </span>
                </span>
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
};

export default DashboardSidebarNav;
