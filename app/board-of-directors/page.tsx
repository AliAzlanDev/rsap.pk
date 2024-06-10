import { ProgressBarLink } from "@/components/global/progress-bar";
import { bod } from "@/utils/constants";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

export default function BoardOfDirectors() {
  return (
    <section>
      <div className="container-x py-10 ">
        <h1 className="text-2xl font-semibold text-center lg:text-3xl">
          Our <span className="text-primary">Board of Directors</span>
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          The RSAP Board of Directors consists of 9 officials. The members of
          the board are responsible for the management of the Association.
        </p>

        <img src="https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/444975993_348204351624676_4178348965915902093_n.jpg?stp=dst-webp_e15_q70_s2410x1700_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_eui2=AeE1mADHEydc_ZHvxH2mlUdg7OlSNY8TJBHs6VI1jxMkEW-0_x3UwBc5f8zU0qDA1HQ05INow48ZB-Rg4aHxkWx6&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.flhe41-1.fna&_nc_cat=106&_nc_ohc=Q3zkt09itwoQ7kNvgHlwV_A&ccb=1-7&_nc_sid=5f2048&oh=00_AYDEhfMLWpXASmos-mxzuSx--769hAs7Ohmm9_ub7kiOuw&oe=6668CDBD" />

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 ">
          {bod.map((item, index) => (
            <ProgressBarLink
              href={`/board-of-directors/${item.slug}`}
              key={index}
            >
              <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary dark:hover:border-transparent">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-muted"
                    src={item.image}
                    alt=""
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h2 className="text-xl font-semibold  capitalize md:text-2xl  group-hover:text-white">
                      {item.name}

                      <a
                        href={`mailto:${item.email}`}
                        className=" inline-flex ml-3"
                      >
                        <EnvelopeOpenIcon />
                      </a>
                    </h2>

                    <p className="mt-2 font-medium  text-muted-foreground group-hover:text-zinc-300">
                      {item.position}
                    </p>
                    <p className="mt-1 text-sm  text-muted-foreground  group-hover:text-zinc-300">
                      {item.description}
                    </p>
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
