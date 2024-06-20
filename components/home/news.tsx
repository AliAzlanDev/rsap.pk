import { news } from "@/app/source";
import { Button } from "../ui/button";
import { ProgressBarLink } from "../global/progress-bar";

export function News() {
  const posts = [...news.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );
  return (
    <div className="container-x py-10">
      <h1 className=" text-center text-4xl font-bold">Latest News</h1>

      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((p) => (
          <div
            className=" p-4 border flex flex-col justify-between"
            key={p.slugs[0]}
          >
            <ProgressBarLink href={`/news/${p.slugs[0]}`}>
              <img
                src={p.data.banner}
                className=" cursor-pointer"
                loading="lazy"
              />
            </ProgressBarLink>
            <ProgressBarLink href={`/news/${p.slugs[0]}`}>
              <p className="font-medium mt-5"> {p.data.title}</p>
            </ProgressBarLink>
            <p className=" mt-2 mb-2 text-muted-foreground text-sm">
              {p.data.description}
            </p>
            <ProgressBarLink
              href={`/news/${p.slugs[0]}`}
              className="text-primary text-sm hover:underline hover:cursor-pointer"
            >
              Read More
            </ProgressBarLink>
          </div>
        ))}
      </div>
      <ProgressBarLink href={`/news`}>
        <Button
          variant="secondary"
          className="mt-8 w-fit mx-auto"
          text="Show All News"
        />
      </ProgressBarLink>
    </div>
  );
}
