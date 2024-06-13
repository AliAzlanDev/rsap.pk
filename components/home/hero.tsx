"use client";

import { siteConfig } from "@/utils/constants";
import { Button } from "../ui/button";
import { ProgressBarLink } from "../global/progress-bar";
import { AnimatePresence, motion } from "framer-motion";
import Particles from "../ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/utils/hooks/use-media-query";

function Hero() {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10">
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2  border hover:border-foreground bg-background text-muted-foreground text-xs  p-2 px-3 rounded-full transition  "
            href="/about"
          >
            What we do?
            <span className="flex items-center gap-x-1">
              <span className="border-s  text-foreground ps-2 ">
                Learn More
              </span>
              <svg
                className="flex-shrink-0 size-4 text-foreground"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <h1 className="block font-bold text-foreground text-4xl md:text-5xl lg:text-6xl ">
            {siteConfig.name}
          </h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-muted-foreground">
            Connecting radiological students and trainees nationwide!
          </p>
        </div>

        <div className="mt-8 gap-3 flex justify-center">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
            href="/join"
          >
            Become a Member
          </a>
        </div>
      </div>
    </div>
  );
}
export default Hero;

export const STAGGER_CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 5, transition: { duration: 0.2, type: "tween" } },
};

export function Hero2({ title, link }: { title: string; link: string }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  // View port is atleast 768px
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#28215B");
  }, [theme]);
  return (
    <AnimatePresence>
      <motion.div
        className="relative isolate px-6  lg:px-8"
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, type: "tween" }}
      >
        <Particles
          className="absolute inset-0 overflow-x-hidden"
          quantity={matches ? 60 : 30}
          ease={80}
          color={color}
          refresh
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <motion.div
          className="mx-auto max-w-2xl pt-16 pb-10 md:pt-32 md:pb-24 md:max-w-4xl xl:max-w-5xl "
          variants={{
            show: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={STAGGER_CHILD_VARIANTS}
            className="hidden sm:mb-8 sm:flex sm:justify-center"
          >
            <div className="relative flex items-center gap-x-2 rounded-full px-3 py-1 text-sm leading-6  text-muted-foreground ring-1 ring-ring/10 hover:ring-ring/20">
              <span>{title}</span>

              <ProgressBarLink
                href={link}
                className="font-semibold text-primary flex items-center gap-x-0.5"
              >
                <span> Read more</span>
                <span aria-hidden="true">
                  <svg
                    className="flex-shrink-0 size-4 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </ProgressBarLink>
            </div>
          </motion.div>
          <div className="text-center">
            <motion.div
              variants={STAGGER_CHILD_VARIANTS}
              className="text-4xl font-bold tracking-tight  sm:text-6xl lg:text-7xl text-rsap"
            >
              Radiological Students&apos; Association of Pakistan
            </motion.div>
            <motion.p
              variants={STAGGER_CHILD_VARIANTS}
              className="mt-6 text-lg leading-8 text-muted-foreground lg:text-xl "
            >
              Connecting radiological students and trainees nationwide!
            </motion.p>
            <div className="mt-10 flex items-center justify-center gap-x-6 xl:mt-20">
              <motion.div variants={STAGGER_CHILD_VARIANTS}>
                <ProgressBarLink href="/join">
                  <Button text="Get Started" className="" />
                </ProgressBarLink>
              </motion.div>
              <motion.div variants={STAGGER_CHILD_VARIANTS}>
                <ProgressBarLink
                  href="/about"
                  className="text-sm font-semibold leading-6 "
                >
                  Learn more{" "}
                  <span aria-hidden="true">
                    <svg
                      className="flex-shrink-0 size-4 inline-flex"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                </ProgressBarLink>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div
          className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
