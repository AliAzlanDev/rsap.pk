"use client";

import { useState } from "react";
import MicroscopeIcon from "../icons/microscope";
import { cn } from "@/utils/shadcn";
import GraduationCapIcon from "../icons/graduation-cap";
import { GlobeIcon } from "@radix-ui/react-icons";
import LinearGradient from "../ui/linear-gradient";

/* eslint-disable @next/next/no-img-element */
export default function Committees() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="mb-20 relative">
      <LinearGradient direction="top" transitionPoint="40%" />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-foreground font-bold sm:text-3xl ">
                RSAP Working Committees
              </h2>

              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  type="button"
                  className={cn(
                    "text-start hover:bg-accent p-4 md:p-5 rounded-xl",
                    activeTab === 1 &&
                      "bg-background shadow-md hover:bg-background"
                  )}
                  id="tabs-with-card-item-1"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                  onClick={() => handleTabClick(1)}
                >
                  <span className="flex">
                    <MicroscopeIcon className="flex-shrink-0 mt-2 size-6 md:size-7 text-foreground" />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold text-foreground">
                        Research and Publications
                      </span>
                      <span className="block mt-1 text-muted-foreground">
                        Facilitates aspiring radiology researchers through
                        projects and learning opportunities, fostering
                        innovative contributions to the field.
                      </span>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className={cn(
                    "text-start hover:bg-accent p-4 md:p-5 rounded-xl",
                    activeTab === 2 &&
                      "bg-background shadow-md hover:bg-background"
                  )}
                  id="tabs-with-card-item-2"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                  onClick={() => handleTabClick(2)}
                >
                  <span className="flex">
                    <GraduationCapIcon className="flex-shrink-0 mt-2 size-6 md:size-7 text-foreground" />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold text-foreground">
                        Mentorship & Education
                      </span>
                      <span className="block mt-1 text-muted-foreground">
                        Empowers radiology students with expert mentorship,
                        innovative resources, and professional growth
                        opportunities.
                      </span>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className={cn(
                    "text-start hover:bg-accent p-4 md:p-5 rounded-xl",
                    activeTab === 3 &&
                      "bg-background shadow-md hover:bg-background"
                  )}
                  id="tabs-with-card-item-3"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                  onClick={() => handleTabClick(3)}
                >
                  <span className="flex">
                    <GlobeIcon className="flex-shrink-0 mt-2 size-6 md:size-7 text-foreground" />
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold text-foreground">
                        Advocacy & Networking
                      </span>
                      <span className="block mt-1 text-muted-foreground">
                        Connects with organizations, radiology interest groups,
                        and advocacy initiatives, establishing a hub for
                        opportunities.
                      </span>
                    </span>
                  </span>
                </button>
              </nav>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div>
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                    className={activeTab === 1 ? "" : "hidden"}
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      src="/image/rpc-home.jpg"
                      alt="RPC"
                    />
                  </div>

                  <div
                    id="tabs-with-card-2"
                    className={activeTab === 2 ? "" : "hidden"}
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-2"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      src="/image/mec-home.jpg"
                      alt="MEC"
                      loading="lazy"
                    />
                  </div>

                  <div
                    id="tabs-with-card-3"
                    className={activeTab === 3 ? "" : "hidden"}
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-3"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      src="/image/anc-home.jpg"
                      alt="Image Description"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                  <svg
                    className={cn(
                      "w-16 h-auto text-blue-500",
                      activeTab === 1
                        ? " text-[#5f903f]"
                        : activeTab === 2
                        ? "text-[#0e0021]"
                        : "text-[#bd202a]"
                    )}
                    width="121"
                    height="135"
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
