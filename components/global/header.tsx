import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ProgressBarLink } from "./progress-bar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import RSAPLogo from "../icons/logo";
import { MobileNavigation, Navigation } from "./navigation";
import { Button } from "../ui/button";
import { siteMetadata } from "@/utils/constants";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="sticky -top-1 z-[11] flex justify-between h-16 items-center gap-4 bg-background container-x">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <ProgressBarLink
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <RSAPLogo className="size-8 fill-rsap" />
          <span className="sr-only">RSAP</span>
        </ProgressBarLink>

        <Navigation />
      </nav>

      <MobileNavigation />
      <div className="flex gap-2 items-center">
        <ProgressBarLink href={"/join"}>
          <Button text="Join RSAP" className="w-fit" />
        </ProgressBarLink>
        <ModeToggle />
      </div>

      {/* <DropdownMenu>  */}
    </header>
  );
}
