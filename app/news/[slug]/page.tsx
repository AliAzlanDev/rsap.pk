import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { news } from "@/app/source";
import { createMetadata } from "@/utils/create-metadata";
import { siteConfig } from "@/utils/constants";
import { BackButton } from "./page.client";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

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
      <div className="container-x  py-16 sm:px-16 xl:px-20">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mb-2 xl:col-span-2"></div>
          <div className="col-span-12 lg:col-span-8">
            <article className="flex flex-col gap-8">
              <div className="flex flex-col gap-8 max-w-2xl">
                <Link
                  href={`/news`}
                  className="text-primary/80 flex items-center gap-x-1 font-semibold hover:text-primary uppercase mb-2 mt-0"
                >
                  <ChevronLeftIcon className="size-4" />
                  news
                </Link>

                <h1 className="text-foreground text-4xl font-semibold xl:text-5xl xl:leading-tight">
                  {page.data.title}
                </h1>
                <h2 className="text-foreground text-xl xl:text-2xl">
                  {page.data.description}
                </h2>

                <div>
                  <p className=" text-muted-foreground text-sm">Written by</p>
                  <p className=" text-primary font-medium mt-1">
                    {page.data.author}
                  </p>
                </div>

                <div className="prose dark:prose-invert md:prose-lg mt-12 ">
                  <page.data.exports.default />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export function generateMetadata({ params }: { params: Param }): Metadata {
  const page = news.getPage([params.slug]);

  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description ?? "Latest updates from RSAP.",
    openGraph: {
      images: `${siteConfig.url}${page.data.banner}`,
    },
    twitter: {
      images: `${siteConfig.url}${page.data.banner}`,
    },
  });
}

export function generateStaticParams(): Param[] {
  return news.getPages().map<Param>((page) => ({
    slug: page.slugs[0],
  }));
}
