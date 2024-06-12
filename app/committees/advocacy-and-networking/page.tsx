import { CommitteePage } from "@/components/block/committee-page";
import { committees } from "@/utils/constants";

export const metadata = {
  title: "Advocacy and Networking Committee",
};
export default function Page() {
  const page = committees.advocacyAndNetwroking;
  return <CommitteePage {...page} />;
}
