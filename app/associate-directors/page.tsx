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
        Our Associate Directors
      </h1>
      {associateDirectors.map((item, index) => {
        const id = item.id;

        return (
          <ProgressBarLink
            href={item.link ? item.link : "#"}
            key={index}
            className={cn(
              "mt-16 px-4 md:px-8 py-8 rounded-lg border shadow relative block group ",
              !item.link && "cursor-default",
              id === "anc"
                ? "bg-anc/10 border-anc/20"
                : id === "mec"
                ? "bg-mec/10 border-mec/20 dark:border-border"
                : id === "rpc"
                ? "bg-rpc/10 border-rpc/20"
                : "border-rsap/20"
            )}
          >
            <h2 className=" text-2xl font-semibold text-center lg:text-3xl">
              {item.name}
            </h2>

            {id !== "anc" && id !== "mec" && id !== "rpc" && (
              <div className="absolute -z-10 hidden lg:block mx-auto -right-10 bottom-4">
                <RSAPLogo className="fill-rsap dark:fill-rsap opacity-20 max-h-24 ransition-opacity duration-300" />
              </div>
            )}

            <div className="mt-10 grid relative grid-cols-1 mx-auto sm:grid-cols-2  lg:grid-cols-4 gap-7">
              {id && id === "anc" ? (
                <div className="absolute -z-10 hidden sm:block mx-auto -bottom-5 -right-5">
                  <ANCIcon className="fill-anc h-full w-full dark:fill-rsap max-h-36 opacity-20 transition-opacity duration-300" />
                </div>
              ) : id === "mec" ? (
                <div className="absolute -z-10 hidden sm:block mx-auto -bottom-5 -right-5">
                  <MECIcon className="fill-mec h-full w-full dark:fill-rsap max-h-36  opacity-20 transition-opacity duration-300" />
                </div>
              ) : id === "rpc" ? (
                <div className="absolute -z-10 hidden sm:block mx-auto -bottom-5 -right-5">
                  <RPCIcon className="fill-rpc h-full w-full dark:fill-rsap max-h-36 opacity-20 transition-opacity duration-300" />
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
        );
      })}
    </div>
  );
}
