import { ThemeSelect } from "@/components/global/theme-select";

import { ProgressBarLink } from "@/components/global/progress-bar";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      Starter Template
      <ProgressBarLink href={`/hello`}>Hello</ProgressBarLink>
      <ThemeSelect />
    </main>
  );
}
