"use client";
import { Button } from "@/components/ui/button";
import { Share1Icon } from "@radix-ui/react-icons";

export function Control({ url }: { url: string }): React.ReactElement {
  return <Button text="Share News" icon={<Share1Icon className="size-4" />} />;
}
