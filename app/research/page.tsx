import { ProgressBarLink } from "@/components/global/progress-bar";
import UsersIcon from "@/components/icons/users";
import { Button } from "@/components/ui/button";
import { CalendarIcon, FileTextIcon, ReaderIcon } from "@radix-ui/react-icons";

export const metadata = {
  title: "Research",
  description:
    "RSAP is dedicated to advancing the field of radiology through research.",
};
export default function Research() {
  return (
    <div className="container-x py-20">
      <div className=" prose dark:prose-invert prose-zinc mx-auto">
        <h1 className=" !text-rsap">Research at RSAP</h1>
        <p>
          Our{" "}
          <ProgressBarLink href={"/committees/research-and-publications"}>
            Research and Publications Committee (RPC)
          </ProgressBarLink>{" "}
          is dedicated to advancing the field of radiology through research.
        </p>
      </div>
      <h2 className=" text-3xl font-semibold text-center lg:text-4xl py-10">
        Our Research Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            className="flex flex-col border shadow rounded-xl p-6 justify-between"
            key={item.title}
          >
            <div>
              <p className="font-medium">{item.title}</p>

              {item.type && (
                <p className="mt-2 text-muted-foreground text-sm">
                  <ReaderIcon className="mr-1 inline-flex size-4" />

                  {item.type}
                </p>
              )}
              {item.date && (
                <p className="mt-2 text-muted-foreground text-sm">
                  <CalendarIcon className="mr-1 inline-flex size-4" />

                  {item.date}
                </p>
              )}
              {item.journal && (
                <p className="text-muted-foreground text-sm mt-2">
                  <FileTextIcon className="mr-1 inline-flex size-4" />
                  {item.journal}
                </p>
              )}
              {item.authors && (
                <p className="mt-2 text-muted-foreground text-sm">
                  <UsersIcon className="mr-1 inline-flex size-4" />

                  {item.authors.join(", ")}
                </p>
              )}
            </div>
            <a target="_blank" href={item.link} className=" mt-5">
              <Button
                text={item.disabled ? "In Progress" : "Read More"}
                disabled={item.disabled}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title:
      "Addressing the shortcomings of radiology education in Pakistan: are medical schools doing enough?",
    disabled: true,
    type: "Cross-sectional Study",
  },
  {
    title:
      "The Efficacy of Ketoconazole Containing Regimens in Castration-Resistant Prostate Cancer: A Systematic Review and Meta-Analysis",
    link: "https://doi.org/10.1016/j.clgc.2024.01.003",
    authors: [
      " Obaid Ur Rehman",
      "Zain Ali Nadeem",
      "Eeshal Fatima",
      "Umar Akram",
      "Hiba Imran",
      "Ali Husnain",
      "Arsalan Nadeem",
      "Waqas Rasheed",
    ],
    journal: "Clinical Genitourinary Cancer",

    date: "January 09, 2024",
    type: "Meta-analysis",
  },
  {
    title:
      "Concurrent acute pancreatitis, pneumoperitoneum, pneumoretroperitoneum, and pneumomediastinum following ERCP-related perforation: A rare and insightful case study",
    journal: "Radiology Case Reports",
    authors: [
      "Dr. Arsalan Nadeem",
      "Ali Husnain, MD",
      "Dr. Tayyab Zia",
      "Abdullah Ahmed",
    ],
    type: "Case Report",
    date: "January 16, 2024",
    link: "https://doi.org/10.1016/j.radcr.2023.12.064",
  },
];
