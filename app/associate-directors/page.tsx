import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="container-x prose dark:prose-invert prose-zinc py-20">
      <h1 className=" text-3xl font-semibold text-center lg:text-4xl">
        RSAP Associate Directors
      </h1>

      <p>
        We are seeking enthusiastic individuals to serve as{" "}
        <strong>RSAP Associate Directors for 2024-25</strong>. Associate
        Directors play a vital role in supporting RSAP&apos;s mission and
        assisting their respective Directors with specific tasks and
        responsibilities.
      </p>
      <h2>General information on RSAP Associate Directors</h2>
      <ul>
        <li>
          RSAP Directors appoint Associate Directors to aid them in their work
          as part of their teams and assign them specific tasks and
          responsibilities.
        </li>
        <li>
          Associate Directors are welcome to provide input, ideas, and propose
          initiatives to their respective Directors within RSAP.
        </li>
        <li>All Associate Directors must be official members of RSAP.</li>
        <li>
          Associate Directors are considered RSAP officials; however, they are
          not part of the RSAP Board of Directors.
        </li>
        <li>
          No Associate Director may hold more than one appointed role
          simultaneously within a term.
        </li>
        <li>
          Official RSAP Letters of Appointment and Appreciation are offered to
          Associate Directors contingent upon their satisfactory performance
          throughout the term.
        </li>
        <li>
          Please refer to the{" "}
          <a
            href="https://docs.google.com/document/d/196qGbYDzo_ViK1sV_BIfJ_x90GdKtWbZV8dZ_p0C5fE/edit"
            target="_blank"
          >
            RSAP Constitutional Bylaws
          </a>{" "}
          for more information.
        </li>
      </ul>

      <h2>Available RSAP Associate Directors&apos; Positions</h2>
      <ol>
        <li>Associate Director(s) for Human Resources (ADHR)</li>
        <li>
          Associate Director(s) for Public Relations & Communication (ADPRC)
        </li>
        <li>Associate Liaison(s) for Research & Publications (ALRP)</li>
        <li>Associate Liaison(s) for Mentorship & Education (ALME)</li>
        <li>Associate Liaison(s) for Advocacy & Networking (ALAN)</li>
      </ol>

      <h2>How to Apply?</h2>
      <p>Please fill out the Application Form.</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfNpdrzhATKUVtoTscYD_eCiux-UmbBxfjHeNwZD5gbh2UsZA/viewform?pli=1"
        target="_blank"
        className="not-prose"
      >
        <Button text="Application Form" />
      </a>

      <p>
        The deadline to submit your application through this form is{" "}
        <strong>June 30th, 2024 at 23:59 PM Pakistan Time (PKT)</strong>. Any
        late applications will not be considered and will be deemed invalid.
      </p>

      <p>We look forward to receiving your applications!</p>
    </div>
  );
}
