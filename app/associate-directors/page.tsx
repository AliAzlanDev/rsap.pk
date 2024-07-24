import { ProgressBarLink } from "@/components/global/progress-bar";
import RSAPLogo from "@/components/icons/logo";
import { associateDirectors } from "@/utils/constants";
import { cn } from "@/utils/shadcn";

export const metadata = {
  title: "Associate Directors",
};

export default function Page() {
  return (
    <div className="container-x py-20 ">
      <h1 className=" text-3xl font-semibold text-center lg:text-4xl">
        Associate Directors
      </h1>
      {associateDirectors.map((item, index) => (
        <ProgressBarLink
          href={item.link ? item.link : "#"}
          key={index}
          className={cn(
            "mt-16 px-4 md:px-8 py-8 rounded-lg border shadow block group",
            !item.link && "cursor-default"
          )}
        >
          <h2 className=" text-2xl font-semibold text-center lg:text-3xl">
            {item.name}
          </h2>
          <div className="mt-10 grid relative grid-cols-1 mx-auto sm:grid-cols-2  lg:grid-cols-4 gap-7">
            <RSAPLogo
              className={cn(
                "absolute -z-10 hidden left-0 bottom-0 right-0 w-full h-full fill-rsap text-rsap opacity-10  group-hover:opacity-20 transition-opacity duration-300",
                item.link && "sm:block"
              )}
            />

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
