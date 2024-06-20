import { DataCampDonateIcon } from "@/components/icons/datacamp";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "RSAP x DataCamp Donates",
};
export default function Page() {
  return (
    <div className=" container-x prose dark:prose-invert prose-zinc py-16">
      <div className="max-w-sm mx-auto my-8">
        <a
          href="https://www.datacamp.com/donates?utm_source=donates&utm_medium=partner&utm_campaign=000000_1-internal_2-na_3-global_4-na_5-na_6-requirements_7-do_8-ptnr-pn_9-na_10-na_11-logo&noTrack=true"
          target="_blank"
        >
          <DataCampDonateIcon />
        </a>
      </div>
      <h1>RSAP x DataCamp Donates</h1>
      <p>
        <a href="https://www.datacamp.com/">DataCamp</a> is a world-renowned
        platform where you can learn the data and AI skills you need online at
        your own pace—from non-coding essentials to data science, AI, and
        machine learning.
      </p>
      <p>
        Through{" "}
        <a href="https://www.datacamp.com/donates" target="_blank">
          DataCamp Donates
        </a>{" "}
        1-year Scholarship, RSAP members get <b>free access</b> to over{" "}
        <b>400+ courses</b> & 110+ projects, each worth over <b>$399</b>.
      </p>
      <h2>Why use DataCamp as a medical student or doctor?</h2>
      <ul>
        <li>Get access to a wide range of statistical analysis courses.</li>
        <li>
          Become certified in R programming, widely used in academic research.
          (no programming experience required)
        </li>
        <li>
          Get free access to 110+ of data science and machine learning projects.
        </li>
        <li>
          Get free access to over 400 courses, including courses on data
          science, machine learning, and AI.
        </li>
        <li>
          <a href="https://www.datacamp.com/">Learn more about DataCamp</a>
        </li>
      </ul>
      <h2>
        How to apply and access the DataCamp scholarship as an RSAP Member?
      </h2>
      <ul>
        <li>
          This opportunity is exclusively for RSAP Members. If you haven’t
          signed up yet, please register through the{" "}
          <a href="/join">RSAP Membership Form</a>.
        </li>
        <li>
          Applications will be evaluated and reviewed by the RSAP Board of
          Directors on a rolling basis.
        </li>
        <li>
          The top scoring applications will receive access to DataCamp for up to
          1 year (starting July 1, 2024).
        </li>

        <li>
          Accept the invite to DataCamp within the first 2 weeks of your
          selection.
        </li>
        {/* <li>
              Complete one course within the first 8 weeks of your selection.
            </li>
            <li>
              Accumulate at least 4000 XP within the first 20 weeks of your
              selection.
            </li> */}
      </ul>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfKh9wLESUJEoNB8lDYHpzJi6AS90f4_hq1lYrXM5LwyxUJKA/viewform"
        target="_blank"
        className="not-prose"
      >
        <Button text="RSAP x DataCamp Donate Scholarship" />
      </a>
    </div>
  );
}
