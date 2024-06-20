import { cn } from "@/utils/shadcn";
import { ImgHTMLAttributes } from "react";

interface DataCampDonateIconProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export function DataCampDonateIcon({
  className,
  ...props
}: DataCampDonateIconProps) {
  return (
    <>
      <img
        src="/images/dc.png"
        alt="DataCamp Donates"
        className={cn("block dark:hidden", className)}
        {...props}
      />
      <img
        src="/images/dc-dark.png"
        alt="DataCamp Donates"
        className={cn("hidden dark:block", className)}
        {...props}
      />
    </>
  );
}
