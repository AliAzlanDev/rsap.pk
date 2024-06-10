import { Button } from "@/components/ui/button";

export default function Benefits() {
  return (
    <div className=" container-x py-20 prose dark:prose-invert prose-zinc mx-auto">
      <h1>Benefits of RSAP Membership</h1>
      <ul>
        <li>Free access to RSAP webinars, seminars, and resources catalogue</li>
        <li>
          Quarterly newsletters keeping you updated on RSAP’s activities and
          opportunities
        </li>
        <li>
          Participation in RSAP’s Mentorship Program and research projects
        </li>
        <li>Official RSAP Membership Letter & Certificate</li>
        <li>Access to numerous other valuable opportunities</li>
      </ul>
      <h2>Membership Form</h2>
      <Button text="Join RSAP" />
    </div>
  );
}
