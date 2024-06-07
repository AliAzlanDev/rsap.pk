"use client";
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
  GlobeIcon,
  InfoCircledIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { ProgressBarLink } from "./progress-bar";
import MicroscopeIcon from "../icons/microscope";
import GraduationCapIcon from "../icons/graduation-cap";

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
    icon: <MicroscopeIcon className="size-4" />,
  },
  {
    title: "Mentorship & Education",
    href: "/committees/mentorship-and-education",
    description: "Learn from radiology experts",
    icon: <GraduationCapIcon className="size-4" />,
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
    href: "/about",
    description: "More about RSAP",
    icon: <InfoCircledIcon />,
  },
  {
    title: "Board of Directors",
    href: "/board-of-directors",
    description: "The leadership",
    icon: <PersonIcon />,
  },
  {
    title: "Bylaws",
    href: "/bylaws",
    description: "Read RSAP Bylaws",
    icon: <FileIcon />,
  },
];

export const membership: IconMenu[] = [
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
            Membership
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" w-[300px]  p-3 bg-background">
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

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm rounded-full border-0 px-3 py-1.5 text-muted-foreground font-normal">
            Association
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" w-[250px]  p-3">
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
            <div className=" w-[300px]  p-3">
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
          <ProgressBarLink
            className="inline-flex h-9 w-max items-center justify-center bg-background transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-sm rounded-full border-0 px-3 py-1.5 text-muted-foreground font-normal hover:bg-accent"
            href={"/news"}
          >
            News
          </ProgressBarLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNavigation() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h4 className=" text-lg   font-medium">Membership</h4>
        <h5 className=" text-sm py-1  font-normal text-muted-foreground">
          Become RSAP Member
        </h5>
        <ul>
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
      <div>
        <h4 className=" text-lg   font-medium">Committees</h4>
        <h5 className=" text-sm py-1  font-normal text-muted-foreground">
          RSAP Committees
        </h5>
        <ul>
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
      <div>
        <h4 className=" text-lg   font-medium">Association</h4>
        <h5 className=" text-sm py-1  font-normal text-muted-foreground">
          About RSAP
        </h5>
        <ul>
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
    </div>
  );
}

function IconMenu({ title, description, icon, href }: IconMenu) {
  return (
    <ProgressBarLink
      href={href}
      className="flex hover:cursor-pointer group items-center gap-3 outline-none select-none text-sm  p-3 rounded-[6px]"
    >
      <div className=" size-8 border rounded grid place-items-center text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-white">
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
  );
}
