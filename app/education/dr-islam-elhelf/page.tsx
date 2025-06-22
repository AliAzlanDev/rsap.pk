import XIcon from "@/components/icons/x";
import { getPlaylist, getVideo } from "@/utils/getVideo";
import InstagramIcon from "@/components/icons/instagram";
import FacebookIcon from "@/components/icons/facebook";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import YoutubeIcon from "@/components/icons/youtube";
import { InfoIcon } from "lucide-react";
import LinkedInIcon from "@/components/icons/linkedin";

export const metadata = {
  title: "Dr. Islam Elhelf, MD",
  description:
    "Dr. Islam Elhelf is a renowned interventional radiologist with extensive training and research experience.",
};

export default async function EducationDrIslamElhelf() {
  const data = await getVideo("UCLJZAAukMALXKQYfG0SfweA", 6);
  const playlists = {
    playlist1: {
      id: "PLS6Q3N0exDd_G5KsfyxQFtb5mscxNLLRm",
      title: "Basics of IR (Arabic)",
    },
    playlist2: {
      id: "PLS6Q3N0exDd_4YLK-dOvL24iwCNEEck13",
      title: "Basics of IR (English)",
    },
  };
  const playlist1 = await getPlaylist(playlists.playlist1.id);
  const playlist2 = await getPlaylist(playlists.playlist2.id);

  return (
    <div className="py-10 container-x ">
      <div className="border p-6 flex flex-col-reverse md:flex-row items-center md:items-start justify-between rounded-xl shadow">
        <div>
          <h1 className="text-4xl font-bold mt-8 md:mt-0">
            Dr. Islam Elhelf, MD
          </h1>
          <div className="flex gap-4 items-center mt-5">
            <a
              href="https://www.augusta.edu/faculty/directory/view.php?id=IELHELF"
              target="_blank"
            >
              <InfoIcon className="size-8 text-rsap" />
            </a>
            <a href="https://www.youtube.com/@IRPathway" target="_blank">
              <YoutubeIcon className="size-8" />
            </a>
            <a href={`https://x.com/IR_Pathway`} target="_blank">
              <XIcon className="size-7 fill-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/islam-a-shehata-elhelf-05801a30"
              target="_blank"
            >
              <LinkedInIcon className="size-7" />
            </a>
            <a href={`https://instagram.com/ir_pathway`} target="_blank">
              <InstagramIcon className="size-8" />
            </a>
            <a href="https://facebook.com/irpathway" target="_blank">
              <FacebookIcon className="size-8" />
            </a>
          </div>
          <div className="mt-10 ">
            <img
              src="/images/boa/ielhelf.jpg"
              alt="Dr. Islam Elhelf"
              className="rounded-md size-96  object-cover float-left mr-8 mb-8"
            />
            <div className="prose dark:prose-invert prose-zinc max-w-full">
              <p>
                Dr. Elhelf graduated from Cairo University in Egypt and
                completed a diagnostic radiology residency in Egypt. He holds
                master’s and doctoral degrees in diagnostic and interventional
                radiology form Cairo University. Dr. Elhelf completed a second
                diagnostic radiology residency and a fellowship in nuclear
                medicine at University of Iowa Hospitals and Clinics. He also
                did an interventional radiology fellowship at Harvard Medical
                School/Beth Israel Deaconess Medical Center in Boston. Dr.
                Elhelf has extended research experience in the field of high
                intensity focused ultrasound. He is also interested in
                interventional oncology, theranostic therapies and nuclear
                medicine.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-semibold mt-16 hover:underline hover:underline-offset-4">
        <a href="https://www.youtube.com/@IRPathway" target="_blank">
          Latest Videos from IR Pathway (@IRPathway){" "}
          <OpenInNewWindowIcon className=" inline-flex size-8 " />
        </a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-7 gap-4 md:grid-cols-4 ">
        {data.items
          // Temorarily filter out the 4th and 5th videos
          // as they cannot be embedded
          .filter((_, index) => index !== 3 && index !== 4)
          .map((item) => (
            <div key={item.id.videoId}>
              <div className="relative  h-0 w-full pb-[56.25%]">
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${item.id.videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
      </div>
      <a href="https://www.youtube.com/@IRPathway" target="_blank">
        <Button variant="secondary" text="See all videos" />
      </a>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        <div className="rounded-xl border p-3 sm:p-6 w-full">
          <h3 className="text-2xl font-semibold px-3 pt-3 sm:px-0 sm:pt-0">
            {playlists.playlist1.title}
          </h3>
          <a
            href={`https://www.youtube.com/playlist?list=${playlists.playlist1.id}`}
            className="text-sm mt-2 underline underline-offset-2 font-medium  px-3 pt-3 sm:px-0 sm:pt-0"
            target="_blank"
          >
            View playlist
          </a>
          <div className="flex flex-col mt-8">
            {playlist1.items.map((item, index) => (
              <a
                key={item.snippet.resourceId.videoId}
                href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                className="p-3 hover:bg-muted rounded-xl"
                target="_blank"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="font-medium text-muted-foreground hidden sm:block">
                    {index + 1}
                  </div>
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    className=" sm:max-w-44 h-auto flex-shrink-0 rounded-lg"
                  />
                  <p className="font-semibold">{item.snippet.title}</p>
                </div>
              </a>
            ))}
          </div>
          <a
            href={`https://www.youtube.com/playlist?list=${playlists.playlist1.id}`}
            target="_blank"
          >
            <Button variant="secondary" text="View playlist" className="mt-6" />
          </a>
        </div>
        <div className="rounded-xl border p-6 w-full">
          <h3 className="text-2xl font-semibold">
            {playlists.playlist2.title}
          </h3>
          <a
            href={`https://www.youtube.com/playlist?list=${playlists.playlist2.id}`}
            className="text-sm mt-2 underline underline-offset-2 font-medium"
            target="_blank"
          >
            View playlist
          </a>
          <div className="flex flex-col mt-8">
            {playlist2.items.map((item, index) => (
              <a
                key={item.snippet.resourceId.videoId}
                href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                className="p-3 hover:bg-muted rounded-xl"
                target="_blank"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="font-medium text-muted-foreground hidden sm:block">
                    {index + 1}
                  </div>
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    className=" sm:max-w-44 h-auto flex-shrink-0 rounded-lg"
                  />
                  <p className="font-semibold">{item.snippet.title}</p>
                </div>
              </a>
            ))}
          </div>
          <a
            href={`https://www.youtube.com/playlist?list=${playlists.playlist2.id}`}
            target="_blank"
          >
            <Button variant="secondary" text="View playlist" className="mt-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
