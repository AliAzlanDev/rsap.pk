import Hero, { Hero2 } from "@/components/home/hero";
import Committees from "@/components/home/committees";
import { News } from "@/components/home/news";
import { news } from "./source";

export default function Home() {
  const posts = [...news.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );
  const page = posts[0];
  return (
    <main>
      <Hero2 title={page.data.title} link={page.url} />
      <Committees />
      <News />
    </main>
  );
}
