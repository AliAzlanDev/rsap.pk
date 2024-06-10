import Hero from "@/components/home/hero";
import Committees from "@/components/home/committees";
import { News } from "@/components/home/news";

export default function Home() {
  return (
    <main>
      <Hero />
      <Committees />
      <News />
    </main>
  );
}
