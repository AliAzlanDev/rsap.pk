import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Become an RSAP Ambassador",
};

export default function AmbassadorProgram() {
  return (
    <div className="py-20 mx-auto  prose dark:prose-invert prose-zinc max-w-full ">
      <h1 className=" container-x not-prose text-3xl font-semibold text-center lg:text-4xl ">
        Our Ambassadors
      </h1>

      <div className=" mt-10 grid container-x  not-prose w-full grid-cols-1 mx-auto sm:grid-cols-2  lg:grid-cols-4 gap-4">
        {ambassadors.map((ambassador) => (
          <div key={ambassador.name} className="p-4 rounded-lg border">
            <img
              src={`/images/ambassadors/${ambassador.image}`}
              alt={ambassador.name}
              className=" aspect-square rounded-lg"
            />
            <h3 className="mt-2 font-bold text-lg">{ambassador.name}</h3>
            <p className=" mt-1 font-medium text-sm">
              {ambassador.affiliation}
            </p>
          </div>
        ))}
      </div>

      <div className=" container-x max-w-[65ch] pt-20 mx-auto">
        <h2>RSAP Ambassador Program</h2>
        <p>
          In your role as the official RSAP Ambassador for your institute, you
          are entrusted with the responsibility of representing and championing
          RSAP&apos;s mission and its various initiatives within the confines of
          your educational institution.
        </p>
        <h2>Guidelines</h2>
        <ol>
          <li>
            <strong>Represent RSAP:</strong> Act as a representative of RSAP in
            all interactions, embodying its values and mission within the
            medical college.
          </li>
          <li>
            <strong>Feedback Channel:</strong> Serve as a conduit for feedback
            between the medical college and RSAP, helping to improve programs
            and offerings. All RSAP Ambassadors will be reporting to the
            Director for Human Resources and Liaison for Advocacy and Networking
            as their primary points of contact in the RSAP Board of Directors.
          </li>
          <li>
            <strong>Foster Networking:</strong> Facilitate connections between
            students, faculty, and professionals within the radiology society,
            promoting collaboration and mentorship.
          </li>
          <li>
            <strong>Recruit New Members:</strong> Actively engage in recruitment
            efforts to increase the membership of RSAP among medical college
            students.
          </li>
          <li>
            <strong>Disseminate Information:</strong> Promote and spread
            information regarding the latest events, research, and opportunities
            provided by RSAP. (This includes sharing content on social media and
            through WhatsApp)
          </li>
          <li>
            <strong>Organise Events:</strong> Plan and coordinate RSAP events,
            such as seminars, lectures, and workshops, should they be happening
            in your locality.
          </li>
        </ol>
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
    name: "Farooq Ahmad",
    affiliation: "MS5, Allama Iqbal Medical College",
    image: "farooq.jpg",
  },
  {
    name: "Ibrahim Tahir",
    affiliation: "MS5, Lahore Medical and Dental College",
    image: "ibrahim.jpg",
  },
  {
    name: "Rubab Zahra",
    affiliation: "MS4, Allama Iqbal Medical College",
    image: "rubab.jpg",
  },
  {
    name: "Shahroze Ahmed",
    affiliation: "college name",
    image: "shahroze.jpg",
  },
];
