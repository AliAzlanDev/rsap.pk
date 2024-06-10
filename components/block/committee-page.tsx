import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

type Props = {
  title: string;
  description: string;
  image: string;
  lead: {
    name: string;
    position: string;
    affiliation: string;
    email: string;
    picture: string;
  };
};

export function CommitteePage(props: Props) {
  const { title, description, image, lead } = props;
  return (
    <div className="container-x py-20">
      <h1 className="text-center text-4xl font-bold">{title}</h1>
      <div className="flex gap-10  items-center md:items-start md:justify-between flex-col-reverse md:flex-row mt-10">
        <div>
          <p className="prose dark:prose-invert mx-auto">{description}</p>
        </div>
        <img
          src={image}
          alt={title}
          className=" max-w-[400px] w-full  rounded-xl shadow-xl"
        />
      </div>
      <div className="mt-10 border rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-6">
        <img
          src={`/images/bod/${lead.picture}`}
          className=" flex-shrink-0 size-28 object-cover rounded-full "
          alt={lead.name}
        />
        <div className=" text-center sm:text-left">
          <h2 className="font-bold text-2xl ">{lead.position}</h2>
          <h3 className="font-semibold text-xl mt-5">{lead.name}</h3>
          <p className="mt-1 mb-2 text-sm text-muted-foreground">
            {lead.affiliation}
          </p>
          <a
            className=" underline font-medium"
            href="mailto:lrp.radsapakistan@gmail.com"
          >
            <EnvelopeClosedIcon className=" inline-flex mr-2" />
            {lead.email}
          </a>
        </div>
      </div>
    </div>
  );
}
