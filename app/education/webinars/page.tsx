import { ProgressBarLink } from "@/components/global/progress-bar";

export const metadata = {
  title: "Webinars",
  description:
    "RSAP is dedicated to advancing the field of radiology through research.",
};
export default function Research() {
  return (
    <div className="container-x py-20">
      <div className=" prose dark:prose-invert prose-zinc mx-auto">
        <h1 className=" !text-rsap">RSAP Webinars</h1>
        <p>
          Our{" "}
          <ProgressBarLink href={"/committees/mentorship-and-education"}>
            Mentorship and Education Committee (MEC)
          </ProgressBarLink>{" "}
          regularly conducts various educational webinars on radiology, USMLE,
          UKMLA, and other opportunities for medical students.
        </p>

        <h2>Navigating Postdoctoral Research Fellowships in the U.S.</h2>
        <p>
          The webinar featured three esteemed non-US international medical
          graduates (IMGs), who are currently postdoctoral research fellows at
          top U.S. universities, including Ivy League institutions. They shared
          their personal experiences and offered valuable guidance on everything
          from understanding requirements and securing funding to finding and
          evaluating opportunities. A live Q&A discussion session was also held
          as part of the event.{" "}
          <a
            className="block"
            href="/news/navigating-postdoctoral-research-fellowships-in-the-us"
          >
            Learn more
          </a>
        </p>
        <div className="relative  h-0 w-full pb-[56.25%]">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src={`https://www.youtube.com/embed/uK6eKM7LJJA`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
