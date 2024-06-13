import { Metadata } from "next";
import { bylaws } from "../source";
import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/global/coming-soon";

export const metadata: Metadata = {
  title: "RSAP Constitutional Bylaws",
  description:
    "Read the Constitutional Bylaws of Radiological Students’ Association of Pakistan",
};

export default function Bylaws() {
  const page = bylaws.getPage([""]);
  if (!page) return <ComingSoon />;
  return (
    <div className="container-x py-20 mx-auto">
      <div className="prose prose-zinc dark:prose-invert mx-auto">
        <h1>RSAP Constitutional Bylaws</h1>
        <div className="mt-10">
          <page.data.exports.default />
        </div>
      </div>
    </div>
  );
}
