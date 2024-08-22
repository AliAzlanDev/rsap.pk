import { ProgressBarLink } from "@/components/global/progress-bar";
import { ANCIcon } from "@/components/icons/anc";
import RSAPLogo from "@/components/icons/logo";
import { MECIcon } from "@/components/icons/mec";
import { RPCIcon } from "@/components/icons/rpc";
import { associateDirectors } from "@/utils/constants";
import { createMetadata } from "@/utils/create-metadata";
import { cn } from "@/utils/shadcn";

export const metadata = createMetadata({
  title: "Associate Directors",
  openGraph: {
    images: "/images/news/ad.jpg",
  },
  twitter: {
    images: "/images/news/ad.jpg",
  },
});

export default function Page() {
  return (
    <div className="container-x py-20 overflow-x-hidden">
      <h1 className=" text-3xl font-semibold text-center lg:text-4xl">
        Associate Directors
      </h1>
      {associateDirectors.map((item, index) => (
        <ProgressBarLink
          href={item.link ? item.link : "#"}
          key={index}
          className={cn(
            "mt-16 px-4 md:px-8 py-8 rounded-lg border shadow relative block group",
            !item.link && "cursor-default"
          )}
        >
          <h2 className=" text-2xl font-semibold text-center lg:text-3xl">
            {item.name}
          </h2>
          <div className="absolute -z-10 hidden lg:block mx-auto -right-10 bottom-4">
            <RSAPLogo className="fill-rsap dark:fill-rsap  opacity-10 max-h-24  group-hover:opacity-20 transition-opacity duration-300" />
          </div>

          <div className="mt-10 grid relative grid-cols-1 mx-auto sm:grid-cols-2  lg:grid-cols-4 gap-7">
            {item.id && item.id === "anc" ? (
              <div className="absolute -z-10 hidden sm:block mx-auto inset-0">
                <ANCIcon className="fill-[#bd202a] h-full w-full dark:fill-rsap  opacity-10  group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            ) : item.id === "mec" ? (
              <div className="absolute -z-10 hidden sm:block mx-auto inset-0">
                <MECIcon className="fill-[#0e0021] h-full w-full dark:fill-rsap  opacity-10  group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            ) : item.id === "rpc" ? (
              <div className="absolute -z-10 hidden sm:block mx-auto inset-0">
                <RPCIcon className="fill-[#5f903f] h-full w-full dark:fill-rsap  opacity-10  group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            ) : null}

            {item.associateDirectors.map((associate, index) => (
              <div key={index}>
                <img
                  src={`/images/associate-directors/${associate.image}`}
                  alt={associate.name}
                  className=" aspect-square rounded-lg mx-auto"
                />
                <h3 className="mt-2 font-bold text-lg">{associate.name}</h3>
                <div className=" mt-1 font-medium text-sm text-muted-foreground">
                  {associate.institute.map((institute, index) => (
                    <div key={index}>{institute}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ProgressBarLink>
      ))}
    </div>
  );
}
