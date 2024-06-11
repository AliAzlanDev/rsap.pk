import { boa, bod } from "@/utils/constants";
import { createMetadata } from "@/utils/create-metadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default function BoardOfAdivsor({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const bodMember = boa.find((member) => member.slug === params.slug);
  if (!bodMember) {
    notFound();
  }
  return (
    <div className=" py-20 container-x flex flex-col-reverse md:flex-row gap-8 justify-between items-center md:items-start">
      <div>
        <h1 className="text-3xl font-bold">{bodMember.name}</h1>
        <p className="mt-1 font-medium">{bodMember.position}</p>
        <p className="mt-1 text-muted-foreground flex flex-col gap-0.5 text-sm">
          {bodMember.affiliation.map((a, index) => (
            <span key={index}>{a}</span>
          ))}
        </p>
        <div className="mt-8 prose dark:prose-invert prose-zinc">
          {bodMember.bio?.map((b, index) => (
            <p key={index}>{b}</p>
          ))}
        </div>
      </div>
      <img
        className=" max-w-md rounded-xl shadow-lg flex-shrink-0 object-cover size-96 ring-4 ring-muted"
        src={`/images/boa/${bodMember.image}`}
        alt={bodMember.name}
      />
    </div>
  );
}

export function generateMetadata({ params }: { params: Param }): Metadata {
  const page = boa.find((member) => member.slug === params.slug);

  if (!page) notFound();

  return createMetadata({
    title: `${page.name} - Board of Advisors`,
  });
}

interface Param {
  slug: string;
}

export function generateStaticParams(): Param[] {
  return boa.map((member) => ({
    slug: member.slug,
  }));
}
