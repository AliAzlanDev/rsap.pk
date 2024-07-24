import AmbossIcon from "@/components/icons/amboss";
import { DataCampDonateIcon } from "@/components/icons/datacamp";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "RSAP x DataCamp Donates",
};
export default function Page() {
  return (
    <div className=" container-x py-16">
      <div className="max-w-4xl  my-8 grid grid-cols-12 mx-auto  ">
        <img
          src="/images/logo-1.png"
          alt="RSAP"
          className=" col-span-5 -ml-2 md:mx-auto dark:hidden aspect-[2/1]"
        />
        <img
          src="/images/logo-1-invert.png"
          alt="RSAP"
          className=" col-span-5 -ml-2 md:mx-auto hidden dark:block aspect-[2/1]"
        />
        <span className="border-r-2 mr-6 md:mr-[3.3rem]"></span>
        <a
          href="https://www.datacamp.com/donates?utm_source=donates&utm_medium=partner&utm_campaign=000000_1-internal_2-na_3-global_4-na_5-na_6-requirements_7-do_8-ptnr-pn_9-na_10-na_11-logo&noTrack=true"
          target="_blank"
          className=" col-span-6 my-auto max-w-sm"
        >
          <DataCampDonateIcon />
        </a>
      </div>

      <div className=" prose dark:prose-invert prose-zinc mx-auto mt-20">
        <h1>RSAP x DataCamp Donates</h1>
        <p>
          <a href="https://www.datacamp.com/">DataCamp</a> is a world-renowned
          platform where you can learn the data and AI skills you need online at
          your own pace—from non-coding essentials to data science, AI, and
          machine learning.
        </p>
        <p>
          Through the RSAP x{" "}
          <a href="https://www.datacamp.com/donates" target="_blank">
            DataCamp Donates
          </a>{" "}
          Scholarship initiative, RSAP Members can receive a{" "}
          <strong>free</strong> subscription for up to <strong>one year</strong>
          . Enjoy unlimited access to 400+ expertly designed courses and 110+
          projects, a package valued at over <strong>$399</strong>!
        </p>
        <p>
          RSAP stands out as one of Pakistan&apos;s pioneering student and
          trainee-led organizations offering this unparalleled opportunity.
        </p>
        <h2>Why use DataCamp as a medical student or doctor?</h2>
        <p>
          In today&apos;s healthcare landscape, advanced technology, data
          analytics, and machine learning algorithms are integral to modern
          radiology and other medical fields. Big data plays a crucial role in
          tasks such as tumor detection, disease modeling, and personalized
          treatment plans. Mastering these advanced techniques is vital for
          contributing to the field and collaborating with leading medical
          professionals worldwide.
        </p>
        Here&apos;s how the RSAP x DataCamp Donates Scholarship can benefit you:
        <ul>
          <li>
            <strong>Master statistical analysis:</strong> gain in-depth
            knowledge through a wide range of statistical analysis courses,
            enhancing your ability to interpret complex data and contribute to
            groundbreaking research.
          </li>
          <li>
            <strong>Certification in R programming:</strong> become certified in
            R programming, a powerful tool widely used in academic research. No
            prior programming experience is required, making it accessible to
            all medical professionals.
          </li>
          <li>
            ⁠<strong>Extensive course access:</strong> enjoy free access to 440+
            courses, including those focused on data science, machine learning,
            and AI.
          </li>
          <li>
            <strong>Hands-on projects:</strong> get free access to 110+ projects
            on data science and machine learning. These practical experiences
            will solidify your skills and enable you to apply them in real-world
            medical scenarios.
          </li>

          <li>
            <a href="https://www.datacamp.com/" target="_blank">
              Learn more about DataCamp
            </a>
          </li>
        </ul>
        <h2>
          How to apply for the DataCamp scholarship and get access as an RSAP
          Member?
        </h2>
        <ul>
          <li>
            This opportunity is exclusively for <strong>RSAP Members</strong>.
            If you haven&apos;t signed up yet, please register through the{" "}
            <a href="/join">RSAP Membership Form</a>.
          </li>
          <li>
            Applications will be evaluated and reviewed by the RSAP Board of
            Directors on a rolling basis.
          </li>
          <li>
            The top scoring applications will receive access to DataCamp for up
            to
            <strong> one year</strong> (starting July 1, 2024).
          </li>

          <li>
            Acceptance of the DataCamp invitation within{" "}
            <strong>one week</strong> of selection is mandatory to avoid
            revocation of the offer.
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
          <Button text="Scholarship Application Form" />
        </a>
      </div>
    </div>
  );
}
