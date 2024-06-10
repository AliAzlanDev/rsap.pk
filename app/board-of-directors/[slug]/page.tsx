import { bod } from "@/utils/constants";
import { notFound } from "next/navigation";

export default function BoardOfDirector({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const bodMember = bod.find((member) => member.slug === params.slug);
  if (!bodMember) {
    notFound();
  }
  return (
    <div className=" py-20 container-x flex flex-col-reverse md:flex-row gap-8 justify-between">
      <div>
        <h1 className="text-3xl font-bold">{bodMember.name}</h1>
        <p className="mt-1 font-medium">{bodMember.position}</p>
        <p className="mt-1 text-muted-foreground">{bodMember.description}</p>
        <p className="mt-8 text-muted-foreground">{bodMember.bio}</p>
      </div>
      <img
        className=" max-w-md rounded-xl shadow-lg"
        src={bodMember.image}
        alt={bodMember.name}
      />
    </div>
  );
}
