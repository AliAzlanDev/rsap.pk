import { ProgressBarLink } from "@/components/global/progress-bar";
import { createMetadata } from "@/utils/create-metadata";

export const metadata = createMetadata({
  title: "Webinars",
  description:
    "RSAP is dedicated to advancing the field of radiology through research.",
  openGraph: {
    images: "/images/news/post-doc.jpg",
  },
  twitter: {
    images: "/images/news/post-doc.jpg",
  },
});

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
          is committed to empowering aspiring radiologists by regularly hosting
          a series of impactful educational webinars. These sessions discuss
          essential topics, including comprehensive overviews of radiology
          training pathways, in-depth guidance on licensing exams such as the
          USMLE and UKMLA, and exploration of additional opportunities for those
          pursuing a career in radiology. Our webinars are designed to equip
          attendees with the knowledge and tools they need to succeed in their
          radiological education and career journey.
        </p>

        <h2>Navigating Postdoctoral Research Fellowships in the U.S.</h2>
        <div className=" font-semibold -mt-4">August 18, 2024</div>
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
