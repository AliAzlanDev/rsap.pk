import XIcon from "@/components/icons/x";
import { getPlaylist, getVideo } from "./getVideo";
import InstagramIcon from "@/components/icons/instagram";
import LinkedInIcon from "@/components/icons/linkedin";
import FacebookIcon from "@/components/icons/facebook";
import { OpenInNewWindowIcon, PlayIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import YoutubeIcon from "@/components/icons/youtube";
import ForbesIcon from "@/components/icons/forbes";

export default async function EducationDrOmerAwan() {
  const data = await getVideo("UCV_WMc6wSrrYvCio1J7VwIg");
  const playlists = {
    playlist1: {
      id: "PLFqKuvTXsoesCARWn88RYbgD7qvyOtC96",
      title: "Match & Residency Tips",
      thumbnail: "https://i.ytimg.com/vi/Kv7yfZOyLY4/maxresdefault.jpg",
    },
    playlist2: {
      id: "PLFqKuvTXsoevG-050jL0RZ6kDzLr9PjO3",
      title: "Musculoskeletal Radiology Unknown Case Series",
      thumbnail: "https://i.ytimg.com/vi/D-ePRsadSVc/maxresdefault.jpg",
    },
  };
  const playlist1 = await getPlaylist(playlists.playlist1.id);
  const playlist2 = await getPlaylist(playlists.playlist2.id);

  return (
    <div className="py-10 container-x ">
      <div className="border p-6 flex flex-col-reverse md:flex-row items-center md:items-start justify-between rounded-xl shadow">
        <div>
          <h1 className="text-4xl font-bold mt-8 md:mt-0">
            Dr. Omer A. Awan, MD MPH CIIP
          </h1>
          <div className="flex gap-4 items-center mt-5">
            <a href="https://www.youtube.com/@AwanRad" target="_blank">
              <YoutubeIcon className="size-8" />
            </a>
            <a href={`http://twitter.com/AwanRad`} target="_blank">
              <XIcon className="size-7 fill-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/omer-awan-md-mph-ciip-6243556b/"
              target="_blank"
            >
              <LinkedInIcon className="size-7" />
            </a>
            <a href={`http://instagram.com/omerawanmd`} target="_blank">
              <InstagramIcon className="size-8" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100072542480638"
              target="_blank"
            >
              <FacebookIcon className="size-8" />
            </a>
            <a href="https://www.forbes.com/sites/omerawan/" target="_blank">
              <ForbesIcon className="h-5 fill-foreground" />
            </a>
          </div>
          <div className="mt-10 ">
            <img
              src="/images/boa/omer.jpg"
              alt="Dr. Omer Awan"
              className="rounded-md size-96  object-cover float-left mr-8 mb-8"
            />
            <div className="prose dark:prose-invert prose-zinc max-w-full">
              <p>
                Dr. Awan currently serves as a Professor in Diagnostic Radiology
                and Nuclear Medicine at the University of Maryland School of
                Medicine. In addition to his professorship, he holds key
                leadership roles including Vice Chair in Education, Associate
                Program Director of the Diagnostic Radiology Residency, and
                Co-Director of the Medical Student Radiology Clerkship. Dr. Awan
                also contributes as a member of the Teaching Faculty at the
                Harvard Macy Institute.
              </p>
              <p>
                Beyond his academic and clinical commitments, Dr. Awan is a
                prolific contributor to public discourse on healthcare and
                public health. He is a Medical Contributor for the Scripps
                News&apos; &quot;America Tonight Show,&quot; where he discusses
                pressing health issues facing America. Additionally, he writes
                insightful articles as a Healthcare and Public Health Contribute
                for Forbes.
              </p>
              <p>
                Dr. Awan earned his Medical Doctor (MD) degree from the George
                Washington University School of Medicine and Health Sciences and
                a Master in Public Health (MPH) degree from Harvard University.
                His expertise spans medicine, public health, and medical
                education. In recognition of his contributions to medical
                education, PubMed named him a World Expert in Teaching in 2022.
              </p>
              <p>
                Dr. Awan is passionate about using innovative teaching methods
                to educate both the public and medical students on important
                healthcare topics. He actively engages with aspiring
                International Medical Graduates (IMGs) and students through his
                YouTube channel, &quot;MedEdPage,&quot; where he shares
                invaluable videos and radiology cases.
              </p>
              <p>
                RSAP is honored to work under the guidance of Dr. Awan, a leader
                in radiology education and a dedicated advocate for public
                health. His contributions are invaluable to the advancement of
                medical knowledge and practice, both in the United States and
                globally.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-semibold mt-16 hover:underline hover:underline-offset-4">
        <a href="https://www.youtube.com/@AwanRad" target="_blank">
          Latest Videos from MedEdPage (@AwanRad){" "}
          <OpenInNewWindowIcon className=" inline-flex size-8 " />
        </a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-7 gap-4 md:grid-cols-4 ">
        {data.items.map((item) => (
          <div key={item.id.videoId}>
            <div className="relative  h-0 w-full pb-[56.25%]">
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <a href="https://www.youtube.com/@AwanRad" target="_blank">
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
