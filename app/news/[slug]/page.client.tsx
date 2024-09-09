"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, Share1Icon } from "@radix-ui/react-icons";
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";

export function Control({ url }: { url: string }): React.ReactElement {
  return <Button text="Share News" icon={<Share1Icon className="size-4" />} />;
}

export function BackButton() {
  const pathname = usePathname().split("/");
  const backSlug = pathname.slice(1, -1).join("/");
  return (
    <div className="col-span-12 mb-2 xl:col-span-2">
      <Link
        href={`/${backSlug}`}
        className="text-muted-foregroundr hover:text-foreground flex cursor-pointer items-center text-sm transition"
      >
        <ChevronLeftIcon style={{ padding: 0 }} />
        Back
      </Link>
    </div>
  );
}
