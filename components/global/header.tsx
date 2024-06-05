import { DashboardIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ProgressBarLink } from "./progress-bar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import RSAPLogo from "../icons/logo";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-[9999] flex justify-between h-16 items-center gap-4 bg-background container-x">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <ProgressBarLink
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <RSAPLogo className="size-8 fill-rsap" />
          <span className="sr-only">RSAP</span>
        </ProgressBarLink>
      </nav>
      <Navigation />
      <Sheet>
        <SheetTrigger asChild>
          <button className="shrink-0 md:hidden">
            <HamburgerMenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <ProgressBarLink
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <DashboardIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </ProgressBarLink>
            <ProgressBarLink href="#" className="hover:text-foreground">
              Dashboard
            </ProgressBarLink>
            <ProgressBarLink
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </ProgressBarLink>
            <ProgressBarLink
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </ProgressBarLink>
            <ProgressBarLink
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </ProgressBarLink>
            <ProgressBarLink
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Analytics
            </ProgressBarLink>
          </nav>
        </SheetContent>
      </Sheet>

      {/* <DropdownMenu>  */}
    </header>
  );
}
