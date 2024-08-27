import { Button } from "@/components/ui/button";
import { createMetadata } from "@/utils/create-metadata";

export const metadata = createMetadata({
  title: "Become an RSAP Ambassador",
  openGraph: {
    images: "/images/news/ambassador-program.jpg",
  },
  twitter: {
    images: "/images/news/ambassador-program.jpg",
  },
});

export default function AmbassadorProgram() {
  return (
    <div className="py-20 mx-auto  prose dark:prose-invert prose-zinc max-w-full ">
      <h1 className=" container-x not-prose text-3xl font-semibold text-center lg:text-4xl ">
        Our Ambassadors
      </h1>

      <div className=" mt-10 grid container-x  not-prose w-full grid-cols-1 mx-auto sm:grid-cols-2  lg:grid-cols-4 gap-4">
        {ambassadors.map((ambassador) => (
          <div key={ambassador.name} className="p-4 rounded-lg border ">
            <img
              src={`/images/ambassadors/${ambassador.image}`}
              alt={ambassador.name}
              className=" aspect-square rounded-lg mx-auto"
            />
            <h3 className="mt-2 font-bold text-lg">{ambassador.name}</h3>
            <p className=" mt-1 font-medium text-sm">
              {ambassador.affiliation.map((a, index) => (
                <span className="block" key={index}>
                  {a}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>

      <div className=" container-x max-w-[65ch] pt-20 mx-auto">
        <h1>RSAP Ambassador Program</h1>
        <p>
          Join the prestigious RSAP Ambassador Program and become a champion of
          RSAP&apos;s mission at your institution and within your social
          circles. As an RSAP Ambassador, you will:
        </p>
        <ol>
          <li>
            Foster valuable networking in radiology by creating connections
            among students, faculty, and professionals.
          </li>
          <li>
            Actively engage in recruiting new members to expand the RSAP
            community.
          </li>
          <li>
            Disseminate information by sharing the latest RSAP events, research,
            and opportunities on social media and other platforms.
          </li>
          <li>
            Organize impactful local events such as seminars, lectures, and
            workshops.
          </li>
          <li>
            Serve as a vital feedback channel, providing essential insights to
            the RSAP leadership.
          </li>
        </ol>
        This role enhances your leadership skills and allows you to make a
        significant impact in the radiology community within Pakistan. Join us
        and be a catalyst for positive change!
        <h2>How to Apply</h2>
        <p>
          To apply for the RSAP Ambassador Program, please fill out the
          following form.
        </p>
        <a
          className=" not-prose "
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdyDFMp8azj43RM1SZebd7Aw74cN98dtECyfRsXHQ77nKBhiA/viewform"
        >
          <Button text="Apply Now" />
        </a>
      </div>
    </div>
  );
}

const ambassadors = [
  {
    name: "Shahroze Ahmed",
    affiliation: [
      "PGY-1, Diagnostic Radiology",
      "Shaukat Khanum Memorial Cancer Hospital & Research Centre",
      "Lahore, Pakistan",
    ],
    image: "shahroze.jpg",
  },
  {
    name: "Farooq Ahmad",
    affiliation: ["MS5", "Allama Iqbal Medical College", "Lahore, Pakistan"],
    image: "farooq.jpg",
  },
  {
    name: "Ibrahim Tahir",
    affiliation: [
      "MS5",
      "Lahore Medical and Dental College",
      "Lahore, Pakistan",
    ],
    image: "ibrahim.jpg",
  },
  {
    name: "Rubab Zahra",
    affiliation: ["MS4", "Allama Iqbal Medical College", "Lahore, Pakistan"],
    image: "rubab.jpg",
  },
  {
    name: "Eeman Ahmad",
    affiliation: [
      "MS4",
      "FHM College of Medicine & Dentistry",
      "Lahore, Pakistan",
    ],
    image: "eeman.jpg",
  },
  {
    name: "Sehar Fatima",
    affiliation: ["MS4", "Allama Iqbal Medical College", "Lahore, Pakistan"],
    image: "sehar.jpg",
  },
  {
    name: "Farah Ali Afridi",
    affiliation: ["MS2", "Khyber Medical College", "Peshawar, Pakistan"],
    image: "farah.jpg",
  },
];
