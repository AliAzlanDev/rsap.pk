"use client";
import {
  NavigationMenuIndicator,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import React from "react";
import {
  FileIcon,
  FileTextIcon,
  GlobeIcon,
  InfoCircledIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { ProgressBarLink } from "./progress-bar";

type IconMenu = {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
};

const committees: IconMenu[] = [
  {
    title: "Research & Publications",
    href: "/committees/research-and-publications",
    description: "Leading radiology research",
    icon: <MagnifyingGlassIcon />,
  },
  {
    title: "Mentorship & Education",
    href: "/committees/mentorship-and-education",
    description: "Learn from radiology experts",
    icon: <FileTextIcon />,
  },
  {
    title: "Advocacy & Networking",
    href: "/committees/advocacy-and-networking",
    description: "Expanding radiology nationwide",
    icon: <GlobeIcon />,
  },
];

const association: IconMenu[] = [
  {
    title: "About Us",
    href: "/association/about",
    description: "More about RSAP",
    icon: <InfoCircledIcon />,
  },
  {
    title: "Board of Directors",
    href: "/association/board-of-directors",
    description: "The leadership",
    icon: <PersonIcon />,
  },
  {
    title: "Bylaws",
    href: "/association/bylaws",
    description: "Read RSAP Bylaws",
    icon: <FileIcon />,
  },
];

const membership: IconMenu[] = [
  {
    title: "Benefits",
    href: "/membership/about",
    description: "Benefits of Membership",
    icon: <InfoCircledIcon />,
  },
  {
    title: "Eligibility",
    href: "/membership/board-of-directors",
    description: "Are you eligible for membership?",
    icon: <PersonIcon />,
  },
  {
    title: "Join RSAP",
    href: "/membership/bylaws",
    description: "Become RSAP member today",
    icon: <FileIcon />,
  },
];

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm rounded-full border-0 px-3 py-1.5 text-muted-foreground font-normal">
            Association
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="  p-3">
              <h5 className=" text-sm py-2 px-3 font-normal text-muted-foreground">
                About RSAP
              </h5>
              <ul className="">
                {association.map((c) => (
                  <li key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm rounded-full border-0 px-3 py-1.5 text-muted-foreground font-normal">
            Committees
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="  p-3">
              <h5 className=" text-sm py-2 px-3 font-normal text-muted-foreground">
                RSAP Committees
              </h5>
              <ul className="">
                {committees.map((c) => (
                  <li key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm rounded-full border-0 px-3 py-1.5 text-muted-foreground font-normal">
            Membership
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="  p-3 bg-background">
              <h5 className=" text-sm py-2 px-3 font-normal text-muted-foreground">
                Become RSAP Member
              </h5>
              <ul className="">
                {membership.map((c) => (
                  <li key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function IconMenu({ title, description, icon, href }: IconMenu) {
  return (
    <NavigationMenuLink asChild>
      <ProgressBarLink
        href={href}
        className="flex hover:cursor-pointer group items-center gap-3 outline-none select-none text-sm  p-3 rounded-[6px]"
      >
        <div className=" size-8 border rounded grid place-items-center text-muted-foreground group-hover:bg-foreground group-hover:border-foreground group-hover:text-background">
          {icon}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-8 font-medium mb-0.5 whitespace-nowrap">
            {title}
          </div>
          <p className=" text-xs font-normal text-muted-foreground group-hover:text-foreground whitespace-nowrap transition-colors">
            {description}
          </p>
        </div>
      </ProgressBarLink>
    </NavigationMenuLink>
  );
}
