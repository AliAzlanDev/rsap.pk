import { ComingSoon } from "@/components/global/coming-soon";
import { associateDirectors } from "@/utils/constants";

export default function Page() {
  return (
    <div className="container-x py-20 ">
      <h1 className=" text-3xl font-semibold text-center lg:text-4xl">
        Associate Directors
      </h1>
      {associateDirectors.map((item, index) => (
        <div className="mt-16" key={index}>
          <h2 className=" text-2xl font-semibold text-center lg:text-3xl">
            Associate Directors for {item.name}
          </h2>
          <div className="mt-10 grid grid-cols-1 mx-auto sm:grid-cols-2  lg:grid-cols-4 gap-4">
            {item.associateDirectors.map((associate, index) => (
              <div className="p-4 rounded-lg border " key={index}>
                <img
                  src={`/images/associate-directors/${associate.image}`}
                  alt={associate.name}
                  className=" aspect-square rounded-lg mx-auto"
                />
                <h3 className="mt-2 font-bold text-lg">{associate.name}</h3>
                <div className=" mt-1 font-medium text-sm">
                  {associate.institute.map((institute, index) => (
                    <div>{institute}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
