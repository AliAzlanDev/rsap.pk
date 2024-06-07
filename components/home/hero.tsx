"use client";

import { siteMetadata } from "@/utils/constants";

function Hero() {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10">
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2  border hover:border-foreground bg-background text-muted-foreground text-xs  p-2 px-3 rounded-full transition  "
            href="#"
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
            {siteMetadata.title}
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
