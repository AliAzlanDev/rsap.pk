import Link from "next/link";
import { News, news } from "../source";

export const metadata = {
  title: "Latest News",
  description: "Get latest updates from RSAP.",
};

export default function Page(): React.ReactElement {
  const posts = [...news.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <main>
      <h1 className="sr-only">RSAP News</h1>
      <div className="md:container mx-auto py-4 lg:py-10 px-4 sm:px-12 xl:px-16">
        {posts.slice(0, 1).map((post: News, i: number) => (
          <FeaturedThumb key={i} {...post} />
        ))}
      </div>
      <div className="border-t mt-8">
        <div className="md:container mx-auto mt-6 lg:mt-8 px-6 sm:px-16 ">
          <ol
            className={cn(
              "grid -mx-2 sm:-mx-4 py-6 lg:py-6 lg:pb-20",
              "grid-cols-12 lg:gap-4"
            )}
          >
            {posts?.length ? (
              posts.slice(1).map((post: News, idx: number) => (
                <div
                  className="col-span-12 mb-4 md:col-span-12 lg:col-span-6 xl:col-span-4 h-full"
                  key={idx}
                >
                  <NewsItem news={post} />
                </div>
              ))
            ) : (
              <p className="text-sm text-light col-span-full">No results</p>
            )}
          </ol>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import React from "react";
import { cn } from "@/utils/shadcn";

interface Props {
  news: News;
}

const NewsItem = ({ news }: Props) => {
  return (
    <Link
      href={`/news/${news.slugs[0]}`}
      className="group inline-block min-w-full p-2 sm:p-4 h-full border border-transparent transition-all hover:bg-accent dark:hover:bg-accent/40 rounded-xl"
    >
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-1">
          <div className="relative mb-3 w-full overflow-hidden aspect-video rounded-lg border shadow-sm">
            <Image
              fill
              sizes="100%"
              quality={100}
              src={news.data.banner || ""}
              className="scale-100  overflow-hidden "
              alt={`${news.data.title} thumbnail`}
            />
          </div>

          <div className="text-muted-foreground flex items-center space-x-1.5 text-sm">
            <p>
              {new Date(news.data.date ?? news.file.name)
                .toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                .replace(/ /g, " ")}
            </p>
            {/* 
            <p>•</p>
            <p>{news.data.author}</p> */}
          </div>

          <h3 className="text-foreground max-w-sm font-medium text-lg">
            {news.data.title}
          </h3>
          <p className="text-muted-foreground max-w-sm text-sm !mb-0">
            {news.data.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
function FeaturedThumb(news: News) {
  return (
    <div key={news.slugs[0]} className="w-full">
      <Link
        href={`/news/${news.slugs[0]}`}
        className="grid gap-4 lg:grid-cols-7 lg:gap-8 xl:gap-12 hover:bg-accent dark:hover:bg-accent/40 p-2 sm:p-4 rounded-xl"
      >
        <div className="relative w-full  lg:col-span-3 aspect-video overflow-auto rounded-lg border">
          <Image
            src={news.data.banner || ""}
            fill
            sizes="100%"
            quality={100}
            className="object-cover"
            alt="blog thumbnail"
          />
        </div>
        <div className="flex flex-col space-y-2 lg:col-span-4 xl:justify-center max-w-xl">
          <div className="text-muted-foreground flex space-x-2 text-sm">
            <span>
              {" "}
              {new Date(news.data.date ?? news.file.name)
                .toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                .replace(/ /g, " ")}
            </span>
          </div>

          <div>
            <h2 className="h2 lg:!text-2xl xl:!text-3xl !mb-2">
              {news.data.title}
            </h2>
            <p className=" text-muted-foreground xl:text-lg">
              {news.data.description}
            </p>
          </div>

          <div className="flex flex-col w-max gap-2">
            <div className="flex items-center space-x-2">
              <span className="text-rsap m-0 text-sm">{news.data.author}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
