import AmbossIcon from "@/components/icons/amboss";

export const metadata = {
  title: "RSAP x AMBOSS",
};
export default function Page() {
  return (
    <div className=" container-x py-10 overflow-x-hidden">
      <div className="max-w-4xl mx-auto my-8 grid grid-cols-12   ">
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
        <span className="border-r-2 mr-6 md:mr-12"></span>
        <a
          href="https://www.amboss.com"
          target="_blank"
          className=" col-span-6 my-auto"
        >
          <AmbossIcon />
        </a>
      </div>

      <p className="md:text-center text-lg text-muted-foreground mt-10 max-w-[700px] mx-auto">
        AMBOSS is one of the leading online learning platforms designed to
        support your medical career. It features an amazing Library and Question
        Bank aligned with USMLE guidelines, aiding in the preparation for USMLE
        Step 1 and Step 2 exams.
        <br />
        <br />
        Through the RSAP x AMBOSS partnership, RSAP Members will enjoy numerous
        amazing benefits. Stay tuned for more details!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20 ">
        <div className="lg:hidden">
          <h2 className="text-4xl leading-tight font-semibold text-center lg:text-left">
            Your next-gen resource for med school and beyond.
          </h2>
          <p className="mt-6 text-lg text-center text-muted-foreground">
            Learn faster, study smarter, and excel in clerkships
          </p>
        </div>
        <img
          src="/images/amboss-2.png"
          className=" max-w-[600px]"
          alt="AMBOSS"
        />
        <div className="my-auto hidden lg:block">
          <h2 className="text-4xl leading-tight font-semibold text-center md:text-left">
            Your next-gen resource for med school and beyond.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Learn faster, study smarter, and excel in clerkships
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        <div className="my-auto">
          <h2 className="text-4xl font-semibold leading-tight text-center md:text-left">
            All the answers, right in your hands.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Make the right call in every clinical scenario. The AMBOSS Knowledge
            and Qbank apps give you instant and on-the-go medical knowledge and
            guidance.
          </p>
        </div>
        <img src="/images/amboss.png" className=" max-w-[500px]" alt="AMBOSS" />
      </div>
      <h2 className=" text-center text-4xl font-semibold mt-20">
        Content and tools to get the most out of studying
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
        <div className="relative  h-0 w-full pb-[56.25%]">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/61CmmIpFZW8?si=Iza1r_fPHLS4cx4j"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" prose dark:prose-invert prose-zinc">
          <ul>
            <li>
              25,000 textbooks, medical journals, guidelines, and papers
              distilled into 1 digital platform, the AMBOSS Library
            </li>
            <li>
              10,000 radiographic images, videos, illustrations, and flowcharts
            </li>
            <li>
              Anki add-on that automatically links terms to the Library for more
              efficient learning
            </li>
            <li>
              &gt;2,700 Step 1 and &gt;3,900 Step 2 and Shelf practice
              questions, with explanations that link to the Library
            </li>

            <li>
              Unique tools to improve test-taking skills, such as Attending Tips
              and Key Info Highlights
            </li>
            <li>
              Additional diagnostic and treatment guidance for your clerkships
              and sub-internships
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
      </div>
    </div>
  );
}
