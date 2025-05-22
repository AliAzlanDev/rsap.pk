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
      "The 100 Most Influential Papers on Yttrium-90 Transarterial Radioembolization for Primary and Secondary Liver Malignancies: A Bibliometric Analysis",
    journal: "Journal of Vascular and Interventional Radiology",
    authors: [
      "A. Nadeem",
      "A. Husnain",
      "H. Ashraf",
      "M. Sardar",
      "A. Ahmed",
      "Z. Nadeem",
      "M. Serhal",
      "R. Lewandowski",
    ],
    type: "Conference Abstract",
    date: "March 2025",
    link: "https://doi.org/10.1016/j.jvir.2024.12.070",
  },
  {
    title:
      "Microwave Ablation Versus Resection for Colorectal Cancer Liver Metastases: A Systematic Review and Meta-Analysis",
    journal: "Journal of Vascular and Interventional Radiology",
    authors: [
      "A. Nadeem",
      "A. Husnain",
      "T. Mirza",
      "A. Ahmed",
      "D. Javed",
      "M. Sardar",
      "A. Hussain",
      "S. Almas",
      "A. Ahmed",
      "M. Serhal",
      "R. Lewandowski",
    ],
    type: "Conference Abstract",
    date: "March 2025",
    link: "https://doi.org/10.1016/j.jvir.2024.12.494",
  },
  {
    title:
      "T5A-SPIR-9 Efficacy of Uterine Artery Embolization Using Gelatin Sponge Particles for the Treatment of Uterine Leiomyoma - A Systematic Review and Meta-Analysis",
    journal: "RSNA Annual Meeting",
    authors: [
      "Ali Husnain",
      "Arsalan Nadeem",
      "Obaid Ur Rehman",
      "Zain Ali Nadeem",
      "Eeman Ahmad",
      "Umar Akram",
      "Eeshal Fatima",
    ],
    type: "Presentation",
    date: "December 2024",
    link: "https://www.researchgate.net/publication/386506485_T5A-SPIR-9_EFFICACY_OF_UTERINE_ARTERY_EMBOLIZATION_USING_GELATIN_SPONGE_PARTICLES_FOR_THE_TREATMENT_OF_UTERINE_LEIOMYOMA_-_A_SYSTEMATIC_REVIEW_AND_META-ANALYSIS",
  },
  {
    title:
      "Salvage Stereotactic Radiotherapy for Nodal Oligo-recurrent Prostate Cancer: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
    journal: "Clinical Genitourinary Cancer",
    authors: [
      "Ayesha Aman",
      "Arfa Akram",
      "Bisma Akram",
      "Ali Husnain",
      "Aleena Akram",
      "Sania Akram",
      "Eeman Ahmad",
      "Arsalan Nadeem",
    ],
    type: "Meta-analysis",
    date: "October 23, 2024",
    link: "https://doi.org/10.1016/j.clgc.2024.102239",
  },
  {
    title:
      "Concurrent acute pancreatitis, pneumoperitoneum, pneumoretroperitoneum, and pneumomediastinum following ERCP-related perforation: A rare and insightful case study",
    journal: "Radiology Case Reports",
    authors: [
      "Arsalan Nadeem",
      "Ali Husnain",
      "Dr. Tayyab Zia",
      "Abdullah Ahmed",
    ],
    type: "Case Report",
    date: "January 16, 2024",
    link: "https://doi.org/10.1016/j.radcr.2023.12.064",
  },
  {
    title:
      "The Efficacy of Ketoconazole Containing Regimens in Castration-Resistant Prostate Cancer: A Systematic Review and Meta-Analysis",
    link: "https://doi.org/10.1016/j.clgc.2024.01.003",
    authors: [
      "Obaid Ur Rehman",
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
];
