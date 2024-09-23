import { ProgressBarLink } from "@/components/global/progress-bar";
import { bod } from "@/utils/constants";

export const metadata = {
  title: "Board of Directors",
  description:
    "Meet the Board of Directors of Radiological Students’ Association of Pakistan",
};

export default function BoardOfDirectors() {
  return (
    <section>
      <div className="container-x py-10 ">
        <h1 className=" text-3xl font-semibold text-center lg:text-4xl">
          Our Board of Directors
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-muted-foreground">
          The RSAP Board of Directors consists of 9 officials. Members of the
          board are responsible for the management of the Association.
        </p>

        <img src="/images/news/1.jpg" />

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 ">
          {bod.map((item, index) => (
            <ProgressBarLink
              href={`/board-of-directors/${item.slug}`}
              key={index}
            >
              <div className="px-12 py-8 h-full transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary dark:hover:border-transparent">
                <div className="flex flex-col sm:-mx-4 lg:flex-row">
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-muted"
                    src={item.image}
                    alt=""
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h2 className="text-xl font-semibold  capitalize md:text-2xl  group-hover:!text-white">
                      {item.name}
                    </h2>

                    <p className="mt-2 font-medium  text-muted-foreground group-hover:text-zinc-300">
                      {item.position}
                    </p>
                    <p className="mt-1 mb-1 text-sm  text-muted-foreground  group-hover:text-zinc-300">
                      {item.description.join(", ")}
                    </p>

                    <a
                      className=" underline font-medium text-sm text-muted-foreground group-hover:text-zinc-300"
                      href={`mailto:${item.email}`}
                    >
                      {item.email}
                    </a>
                  </div>
                </div>
              </div>
            </ProgressBarLink>
          ))}
        </div>
      </div>
    </section>
  );
}
