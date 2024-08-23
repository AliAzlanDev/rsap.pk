import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";
import LinkedInIcon from "@/components/icons/linkedin";
import XIcon from "@/components/icons/x";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export const metadata = {
  title: "Radiology Interest Groups (RIGs)",
};

export default function RadiologyInterestGroups() {
  return (
    <div className=" container-x py-10">
      <h1 className=" text-3xl font-semibold text-center lg:text-4xl">
        Radiology Interest Groups
      </h1>
      <p className="max-w-2xl mx-auto my-6 text-center text-muted-foreground">
        Radiology Interest Groups (RIGs) across Pakistan officially affiliated
        with RSAP
      </p>
      <div className="mt-10 grid relative grid-cols-1 mx-auto sm:grid-cols-2  lg:grid-cols-4 gap-4">
        {data.map((rig, index) => (
          <div key={index} className="border rounded-lg p-4 shadow">
            <img
              src={`/images/rigs/${rig.logo}`}
              alt={rig.name}
              className=" aspect-square rounded-lg bg-white mx-auto w-full"
            />
            <h3 className="mt-4 text-center font-bold text-lg">{rig.name}</h3>
            <p className=" mt-1 font-medium text-center text-sm ">
              {rig.institution}
            </p>
            <p className="font-medium text-center text-sm">{rig.city}</p>
            <p className=" mt-1 text-center font-medium text-sm text-muted-foreground">
              Established: {rig.year}
            </p>

            <div className="flex mt-5 mx-auto gap-x-3 justify-center items-center">
              {rig.socials.email && (
                <a
                  href={`mailto:${rig.socials.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EnvelopeClosedIcon className="w-5 h-5 " />
                </a>
              )}
              {rig.socials.facebook && (
                <a
                  href={`https://facebook.com/${rig.socials.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className="w-5 h-5 " />
                </a>
              )}
              {rig.socials.instagram && (
                <a
                  href={`https://instagram.com/${rig.socials.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className=" size-5" />
                </a>
              )}
              {rig.socials.x && (
                <a
                  href={`https://x.com/${rig.socials.x}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon className="size-4 fill-foreground" />
                </a>
              )}
              {rig.socials.linkedIn && (
                <a
                  href={`https://linkedin.com/${rig.socials.linkedIn}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="size-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type dataType = {
  name: string;
  logo: string;
  year: number;
  institution: string;
  city: string;
  socials: {
    email?: string;
    facebook?: string;
    instagram?: string;
    x?: string;
    linkedIn?: string;
  };
};

const data: dataType[] = [
  {
    name: "KEMRad",
    logo: "kemrad.png",
    year: 2022,
    institution: "King Edward Medical University",
    city: "Lahore",
    socials: {
      email: "kemuradiologyig@gmail.com",
      instagram: "kemradiologyig",
      facebook: "profile.php?id=100088150849481",
      x: "kemradiologyig",
    },
  },
  {
    name: "AIMCRad",
    logo: "aimcrad.png",
    year: 2023,

    institution: "Allama Iqbal Medical College",
    city: "Lahore",
    socials: {
      email: "aimcradiologyig@gmail.com",
      facebook: "aimcradiologyig",
      instagram: "aimcradig",
      x: "aimcradig",
      linkedIn: "company/aimcradiologyig",
    },
  },
  {
    name: "SIMS RIG",
    logo: "simsrig.png",
    year: 2023,
    institution: "Services Institute of Medical Sciences",
    city: "Lahore",
    socials: {
      email: "simsradiologyig@gmail.com",
      x: "simsradiologyig",
      instagram: "simsradiologyig",
    },
  },
  {
    name: "ZEDRIG",
    logo: "zedrig.png",
    year: 2023,
    institution: "Sheikh Zayed Medical College",
    city: "Rahim Yar Khan",
    socials: {
      instagram: "zayediansrig",
      email: "zayediansradiologyig@gmail.com",
      x: "ZayediansRIG",
    },
  },
  {
    name: "SMDCRad",
    logo: "smdcrad.jpg",
    year: 2023,
    institution: "Shalamar Medical & Dental College",
    city: "Lahore",
    socials: {
      email: "smdcradig@gmail.com",
      instagram: "smdcradig",
      x: "smdcradig",
      facebook: "smdcradiologyig",
    },
  },
  {
    name: "RIG KMC",
    logo: "rig.png",
    year: 2024,
    institution: "Khyber Medical College",
    city: "Peshawar",
    socials: {
      email: "rig.kmc@gmail.com",
      instagram: "rigkmc",
      linkedIn: "company/radiology-interest-group-kmc",
    },
  },
];
