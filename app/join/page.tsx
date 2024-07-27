import { ProgressBarLink } from "@/components/global/progress-bar";
import { Button } from "@/components/ui/button";
import { IdCardIcon, MixIcon, RocketIcon } from "@radix-ui/react-icons";
import { Suspense } from "react";

export const metadata = {
  title: "Join RSAP",
  description:
    "Become part of the Radiological Students’ Association of Pakistan",
};

export default function Join() {
  return (
    <div className="container-x py-20">
      <div className=" prose dark:prose-invert prose-zinc mx-auto">
        <h1 className=" !text-rsap">Join RSAP</h1>
        <h2 className="flex items-center">
          <div className=" size-9 border flex items-center justify-center rounded-md bg-accent">
            <RocketIcon className="size-5" />
          </div>
          <span className="ml-2">Membership Benefits</span>
        </h2>
        <ul>
          <li>Official RSAP Membership Certificate & Letter in your name.</li>
          <li>
            Welcome Package, which includes the RSAP Introduction Manual,
            Roadmap, and Contact Database.
          </li>
          <li>
            Free access to our webinars, seminars, and the RSAP Resources’
            Catalogue.
          </li>
          <li>
            Access to a community of aspiring radiologists and enthusiasts in
            Pakistan, along with our Advisors who are certified radiologists
            across the world.
          </li>
          <li>
            Newsletters keeping you updated on our activities and opportunities.
          </li>
          <li>
            Participation in RSAP Research Projects and the Mentorship Program.
          </li>
          <li>
            Exclusive discounts, including reduced prices for our annual
            meetings and workshops.
          </li>
          <li>
            Subscriptions for exceptional educational resources through our
            partners.
          </li>
          <li>
            Access to leadership opportunities, including applying as an RSAP
            Ambassador or Official!
          </li>
          <li>A platform to collectively celebrate radiology!</li>
        </ul>
        <h2 className="flex items-center">
          <div className=" size-9 border flex items-center justify-center rounded-md bg-accent">
            <IdCardIcon className="size-5" />
          </div>
          <span className="ml-2">Membership Form</span>
        </h2>
        <p>
          Join RSAP today to make the most of these exciting opportunities and
          benefits!
        </p>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfKtiCXOGflGEZF_S8szCwpJNDXzqAMeOQvhc5qLAtb6gBGqg/viewform"
          className=" not-prose"
        >
          <Button text="Become an RSAP Member" />
        </a>
        <h2>FAQs</h2>
        <p>
          Have a question about RSAP membership? Check out our{" "}
          <ProgressBarLink href="/membership/faqs">FAQs page</ProgressBarLink>{" "}
          for answers.
        </p>
      </div>
    </div>
  );
}
