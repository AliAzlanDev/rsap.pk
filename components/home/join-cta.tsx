import { ProgressBarLink } from "../global/progress-bar";
import { Button } from "../ui/button";
import CheckedCircleIcon from "../icons/checked-circle";

const benefits = [
  "Official RSAP Membership Certificate & Letter",
  "Access to Research Projects & Mentorship Program",
  "Free webinars, seminars & RSAP Resources Catalogue",
  "Community of aspiring radiologists across Pakistan",
  "Exclusive partner platform discounts & free access",
  "Newsletters keeping you updated on opportunities",
];

export default function JoinCTA() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 -z-10" />
      <div
        className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-600 to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="container-x">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-widest">
            Membership
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Join the RSAP Community
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Become part of Pakistan&apos;s first radiological students&apos;
            association and unlock a world of opportunities in radiology.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckedCircleIcon className="size-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-5 flex-wrap">
            <ProgressBarLink href="/join">
              <Button text="Become a Member" />
            </ProgressBarLink>
            <ProgressBarLink
              href="/membership/faqs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1"
            >
              View FAQs
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
        </div>
      </div>
    </section>
  );
}
