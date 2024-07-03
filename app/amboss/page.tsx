import AmbossIcon from "@/components/icons/amboss";
import { DataCampDonateIcon } from "@/components/icons/datacamp";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "RSAP x AMBOSS",
};
export default function Page() {
  return (
    <div className=" container-x prose dark:prose-invert prose-zinc py-16">
      <div className="max-w-sm mx-auto my-8 pb-10">
        <a href="https://www.amboss.com" target="_blank">
          <AmbossIcon />
        </a>
      </div>
      <h1 className="mt-4">RSAP x AMBOSS</h1>
      <p>
        <a href="https://www.amboss.com">AMBOSS</a> is a next-generation
        learning resource for medical school and beyond.
      </p>
      <p>
        Through the RSAP x AMBOSS partnership, RSAP Members will enjoy a number
        of amazing benefits. Stay tuned for more details!
      </p>

      <h2>Why use AMBOSS as a medical student or doctor?</h2>
      <p>
        Following features of AMBOSS make it a great choice for medical students
        and doctors:
      </p>

      <ul>
        <li>
          25,000 textbooks, medical journals, guidelines, and papers distilled
          into 1 digital platform, the AMBOSS Library
        </li>
        <li>
          10,000 radiographic images, videos, illustrations, and flowcharts
        </li>
        <li>
          Anki add-on that automatically links terms to the Library for more
          efficient learning
        </li>
        <li>
          &gt;2,700 Step 1 and &gt;3,900 Step 2 and Shelf practice questions,
          with explanations that link to the Library
        </li>

        <li>
          Unique tools to improve test-taking skills, such as Attending Tips and
          Key Info Highlights
        </li>
        <li>
          Additional diagnostic and treatment guidance for your clerkships and
          sub-internships
        </li>
        <li>
          Interactive checklists of critical steps in the management of
          hospitalized patients
        </li>
        <li>
          Full drug database plus instant access to first-line drug dosages
        </li>
        <li>
          <a href="https://www.amboss.com" target="_blank">
            Learn more about AMBOSS
          </a>
        </li>
      </ul>
    </div>
  );
}
