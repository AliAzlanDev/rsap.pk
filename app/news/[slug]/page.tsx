import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { news } from "@/app/source";
import { createMetadata } from "@/utils/create-metadata";

interface Param {
  slug: string;
}

export const dynamicParams = false;

export default function Page({
  params,
}: {
  params: Param;
}): React.ReactElement {
  const page = news.getPage([params.slug]);

  if (!page) notFound();

  return (
    <>
      <div className="container-x rounded-xl border bg-gradient-to-b from-indigo-600/20 to-50% py-8 mt-4">
        <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
        <p className="mb-4 text-muted-foreground">{page.data.description}</p>
      </div>
      <article className="container-x  grid grid-cols-1 px-0 py-8 lg:grid-cols-[2fr_1fr] lg:px-4">
        <div className="prose prose-zinc p-4 pt-0 dark:prose-invert">
          {/* <InlineTOC items={page.data.exports.toc} /> */}

          <page.data.exports.default />
        </div>
        <div className="flex flex-col gap-4 border-l p-4">
          <div>
            <p className="mb-1 text-sm text-muted-foreground">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">On</p>
            <p className="font-medium">
              {new Date(page.data.date ?? page.file.name).toDateString()}
            </p>
          </div>
          {/* <Control url={page.url} /> */}
        </div>
      </article>
    </>
  );
}

export function generateMetadata({ params }: { params: Param }): Metadata {
  const page = news.getPage([params.slug]);

  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description ?? "Latest updates from RSAP.",
  });
}

export function generateStaticParams(): Param[] {
  return news.getPages().map<Param>((page) => ({
    slug: page.slugs[0],
  }));
}
