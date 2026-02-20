import { ProgressBarLink } from "../global/progress-bar";
import { Button } from "../ui/button";
import { RadiologyIcon } from "../icons/radiology";
import { MriIcon } from "../icons/mri";
import CheckedCircleIcon from "../icons/checked-circle";

const objectives = [
  "Unify healthcare professionals and radiological aspirants",
  "Represent Pakistani radiology students internationally",
  "Foster intersectoral collaboration in radiology",
  "Develop and share impactful educational content",
  "Lead innovative research and advocacy initiatives",
];

export default function Mission() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-widest">
            About RSAP
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Pakistan&apos;s First Radiological Students&apos; Association
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Founded to bridge the gap in radiology education and networking,
            RSAP unites aspiring radiologists across Pakistan — fostering
            collaborations, building capacity, and creating a brighter future
            for radiology in the country.
          </p>
          <div className="mt-8">
            <ProgressBarLink href="/about">
              <Button text="Learn About RSAP" variant="outline" />
            </ProgressBarLink>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="border rounded-xl p-6 bg-background shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-9 rounded-md bg-accent flex items-center justify-center flex-shrink-0">
                <RadiologyIcon />
              </div>
              <h3 className="font-semibold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To unite all aspiring radiological students and trainees through
              Pakistan&apos;s first and only radiological students&apos;
              organization.
            </p>
          </div>

          <div className="border rounded-xl p-6 bg-background shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-9 rounded-md bg-accent flex items-center justify-center flex-shrink-0">
                <MriIcon />
              </div>
              <h3 className="font-semibold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To foster collaborations among future healthcare professionals and
              aspiring radiologists, providing opportunities, capacity building,
              and improving the scope of radiology within Pakistan.
            </p>
          </div>

          <div className="border rounded-xl p-6 bg-background shadow-sm">
            <h3 className="font-semibold text-foreground mb-3">
              Key Objectives
            </h3>
            <ul className="space-y-2">
              {objectives.map((obj) => (
                <li
                  key={obj}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckedCircleIcon className="size-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
