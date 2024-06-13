import { bod } from "@/utils/constants";
import { createMetadata } from "@/utils/create-metadata";
import { Metadata } from "next";
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
    <div className=" py-20 container-x flex flex-col-reverse md:flex-row gap-8 justify-between items-center md:items-start">
      <div>
        <h1 className="text-3xl font-bold">{bodMember.name}</h1>
        <p className="mt-1 font-medium">{bodMember.position}</p>
        <p className="mt-1 text-muted-foreground">
          {bodMember.description.map((item, index) => (
            <span key={index} className="block">
              {item}
            </span>
          ))}
        </p>
        <p className="mt-8 text-muted-foreground">{bodMember.bio}</p>
      </div>
      <img
        className=" max-w-md rounded-xl shadow-lg flex-shrink-0 object-cover size-96 ring-4 ring-muted"
        src={bodMember.image}
        alt={bodMember.name}
      />
    </div>
  );
}

export function generateMetadata({ params }: { params: Param }): Metadata {
  const page = bod.find((member) => member.slug === params.slug);

  if (!page) notFound();

  return createMetadata({
    title: `${page.name} - Board of Directors`,
    description: `Member of the Board of Directors of Radiological Students’ Association of Pakistan`,
  });
}

interface Param {
  slug: string;
}

export function generateStaticParams(): Param[] {
  return bod.map((member) => ({
    slug: member.slug,
  }));
}
