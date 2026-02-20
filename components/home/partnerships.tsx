import { ProgressBarLink } from "../global/progress-bar";
import LinearGradient from "../ui/linear-gradient";
import { PieChartIcon, MixIcon, StarIcon } from "@radix-ui/react-icons";

const partnershipsList = [
  {
    title: "DataCamp Donates",
    description:
      "Get free access to DataCamp's world-class data science and analytics learning platform through RSAP's partnership — completely at no cost.",
    href: "/datacamp",
    icon: <PieChartIcon className="size-6" />,
    badge: "Free Access",
    badgeColor:
      "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400",
  },
  {
    title: "AMBOSS",
    description:
      "Access AMBOSS's comprehensive medical knowledge platform with an exclusive discount available only to RSAP members.",
    href: "/amboss",
    icon: <MixIcon className="size-6" />,
    badge: "Member Discount",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
  },
  {
    title: "Med School Bootcamp",
    description:
      "Get a 25% discount on your Med School Bootcamp subscription — an exclusive benefit for all RSAP members.",
    href: "/medschoolbootcamp",
    icon: <StarIcon className="size-6" />,
    badge: "25% Off",
    badgeColor:
      "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400",
  },
];

export default function Partnerships() {
  return (
    <section className="py-16 md:py-20 relative">
      <LinearGradient direction="top" transitionPoint="40%" />
      <div className="container-x">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-widest">
            Partnerships
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Exclusive Member Benefits
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            RSAP members unlock access to premium educational resources through
            our carefully curated partnerships with leading platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnershipsList.map((p) => (
            <div
              key={p.href}
              className="border rounded-xl p-6 bg-background shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="size-11 rounded-lg bg-accent flex items-center justify-center text-foreground">
                    {p.icon}
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.badgeColor}`}
                  >
                    {p.badge}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {p.description}
                </p>
              </div>
              <ProgressBarLink
                href={p.href}
                className="mt-5 text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
              >
                Learn More
                <svg
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </ProgressBarLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
