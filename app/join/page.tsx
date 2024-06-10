import { Button } from "@/components/ui/button";
import { Suspense } from "react";

export default function Join() {
  return (
    <div className="container-x py-20">
      <div className=" prose dark:prose-invert prose-zinc mx-auto">
        <h1 className=" !text-rsap">Join RSAP</h1>
        <h2>Benefits of Membership</h2>
        <ul>
          <li>
            Free access to RSAP webinars, seminars, and resources catalogue
          </li>
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
        <p>Fill out the following form to become member of RSAP.</p>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfKtiCXOGflGEZF_S8szCwpJNDXzqAMeOQvhc5qLAtb6gBGqg/viewform"
        >
          <Button text="Membership Form" />
        </a>
      </div>
    </div>
  );
}
