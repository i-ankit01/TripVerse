// import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconUserBolt,
  IconWorld,
  IconCalendarCheck,
  IconMessageChatbot,
  IconSettings,
  IconEye,
  IconGalaxy,
  IconAi,
  IconRobot,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Car, Globe, Rocket } from "lucide-react";


const DashboardLayout = ({ children }) => {

  const links = [
  {
    label: "Home",
    href: "/dashboard/home",
    icon: (
      <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Trip Planner",
    href: "/dashboard/trip-planner",
    icon: (
      <IconRobot className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Explore",
    href: "/dashboard/explore",
    icon: (
      <IconWorld className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "AR/VR Previews",
    href: "/dashboard/preview",
    icon: (
      <IconEye className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "My Bookings",
    href: "/dashboard/bookings",
    icon: (
      <IconCalendarCheck className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "ChatBot",
    href: "/dashboard/chat",
    icon: (
      <IconMessageChatbot className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: (
      <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Sign Out",
    href: "#",
    icon: (
      <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
];
    const [open, setOpen] = useState(false);
   

  return (
    <div className="flex h-screen bg-gray-50">
      <div
        className={cn(
          "mx-auto flex w-full flex-1 flex-col overflow-hidden border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
          // for your use case, use `h-screen` instead of `h-[60vh]`
          "h-screen"
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              {open ? <IconGalaxy className="text-white" /> : <Globe className="text-white"/>}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: "Manu Arora",
                  href: "#",
                  icon: (
                    <img
                      src="https://assets.aceternity.com/manu.png"
                      className="h-7 w-7 shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
        {/* Main Content */}
        <main className="flex-1 bg-white overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
