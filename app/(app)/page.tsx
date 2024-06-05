import { ThemeSelect } from "@/components/global/theme-select";

import { ProgressBarLink } from "@/components/global/progress-bar";

export default function Home() {
  return (
    <main>
      Starter Template
      <ProgressBarLink href={`/hello`}>Hello</ProgressBarLink>
      <ThemeSelect />
    </main>
  );
}
