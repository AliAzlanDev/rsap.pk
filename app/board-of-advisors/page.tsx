import { boa, bod } from "@/utils/constants";

export default function BoardOfAdvisors() {
  return (
    <div className="py-20  container-x ">
      <div className="container-x py-10 ">
        <h1 className="text-2xl font-semibold text-center lg:text-3xl">
          Our Board of Advisors
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 xl:mt-16 md:grid-cols-3   ">
          {boa.map((item, index) => (
            <div
              key={index}
              className="transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary dark:hover:border-transparent"
            >
              <div className="flex flex-col ">
                <img
                  className="flex-shrink-0 object-cover  rounded-t-xl "
                  src={`/images/boa/${item.image}`}
                  alt=""
                />

                <div className="mt-4 sm:mt-0 p-4 sm:p-6">
                  <h2 className="text-xl font-semibold  capitalize md:text-2xl  group-hover:!text-white">
                    {item.name}
                  </h2>

                  <p className="mt-2 font-medium  group-hover:text-zinc-300">
                    {item.position}
                  </p>
                  <p className="mt-1  text-sm flex flex-col gap-1  text-muted-foreground  group-hover:text-zinc-300">
                    {item.affiliation.map((item, index) => (
                      <span key={index}>
                        {item}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
