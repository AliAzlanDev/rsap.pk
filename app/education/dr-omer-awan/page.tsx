import XIcon from "@/components/icons/x";
import { getVideo } from "./getVideo";
import InstagramIcon from "@/components/icons/instagram";
import LinkedInIcon from "@/components/icons/linkedin";
import FacebookIcon from "@/components/icons/facebook";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default async function EducationDrOmerAwan() {
  const data = await getVideo("UCV_WMc6wSrrYvCio1J7VwIg");
  return (
    <div className="py-20 container-x ">
      <div className="border p-6 flex flex-col-reverse md:flex-row items-center md:items-start justify-between rounded-xl shadow">
        <div>
          <h1 className="text-4xl font-bold mt-5 md:mt-0">Dr. Omer Awan</h1>
          <div className="flex gap-4 items-center mt-5">
            <a href={`http://twitter.com/AwanRad`}>
              <XIcon className="size-7 fill-foreground" />
            </a>
            <a href="https://www.linkedin.com/in/omer-awan-md-mph-ciip-6243556b/">
              <LinkedInIcon className="size-7" />
            </a>
            <a href={`http://instagram.com/omerawanmd`}>
              <InstagramIcon className="size-8" />
            </a>

            <a href="https://www.facebook.com/profile.php?id=100072542480638">
              <FacebookIcon className="size-8" />
            </a>
          </div>
          <div className="prose dark:prose-dark prose-zinc mt-5">
            <p>Bio here</p>
          </div>
        </div>
        <img
          src="/images/boa/junaid.jpg"
          alt="Dr. Omer Awan"
          className="rounded-md size-96 object-cover"
        />
      </div>
      <h2 className="text-4xl font-semibold mt-16 hover:underline hover:underline-offset-4">
        <a href="https://www.youtube.com/@AwanRad" target="_blank">
          Latest Videos from MedEdPage (@AwanRad){" "}
          <OpenInNewWindowIcon className=" inline-flex size-8 " />
        </a>
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        {data.items.map((item) => (
          <div key={item.id.videoId}>
            <div className="relative my-7 h-0 w-full pb-[56.25%]">
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
    </div>
  );
}
