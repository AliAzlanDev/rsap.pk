import { ProgressBarLink } from "@/components/global/progress-bar";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Benefits of RSAP Membership",
};

export default function Benefits() {
  return (
    <div className=" container-x py-20 prose dark:prose-invert prose-zinc mx-auto">
      <h1>Benefits of RSAP Membership</h1>
      <ul>
        <li>Official RSAP Membership Certificate & Letter in your name.</li>
        <li>
          Welcome Package, which includes the RSAP Introduction Manual, Roadmap,
          and Contact Database.
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
          Exclusive discounts, including reduced prices for our annual meetings
          and workshops.
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

      <h2>Membership Form</h2>
      <ProgressBarLink href={`/join`} className=" not-prose">
        <Button text="Membership Form" />
      </ProgressBarLink>
      <p>
        Join RSAP today to make the most of these exciting opportunities and
        benefits!
      </p>
    </div>
  );
}
