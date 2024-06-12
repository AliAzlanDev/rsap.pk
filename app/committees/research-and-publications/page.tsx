import { CommitteePage } from "@/components/block/committee-page";
import { committees } from "@/utils/constants";

export const metadata = {
  title: "Research and Publications Committee",
};

export default function Page() {
  const page = committees.researchAndPublications;
  return <CommitteePage {...page} />;
}
