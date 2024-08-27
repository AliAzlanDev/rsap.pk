import AmbossIcon from "@/components/icons/amboss";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "RSAP x Bootcamp",
};
export default function Page() {
  return (
    <div className=" container-x py-10 overflow-x-hidden">
      <div className="max-w-4xl mx-auto my-8 grid grid-cols-12   ">
        <img
          src="/images/logo-1.png"
          alt="RSAP"
          className=" col-span-5 -ml-2 md:mx-auto dark:hidden aspect-[2/1]"
        />
        <img
          src="/images/logo-1-invert.png"
          alt="RSAP"
          className=" col-span-5 -ml-2 md:mx-auto hidden dark:block aspect-[2/1]"
        />
        <span className="border-r-2 mr-6 md:mr-14"></span>
        <a
          href="https://bootcamp.com/med-school"
          target="_blank"
          className=" col-span-6 my-auto"
        >
          <img
            src="/images/bootcamp-black.png"
            alt="Bootcamp"
            className=" col-span-5 -ml-2 md:mx-auto dark:hidden "
          />
          <img
            src="/images/bootcamp-white.png"
            alt="RSAP"
            className=" col-span-5 -ml-2 md:mx-auto hidden dark:block "
          />
        </a>
      </div>

      <p className="md:text-center text-lg text-muted-foreground mt-10 max-w-[700px] mx-auto">
        Med School Bootcamp is an all-in-one resource containing high-quality
        videos, a premium Step 1 question bank, and much more!
        <br />
        <br />
        Through the RSAP x Med School Bootcamp partnership, RSAP Members can
        avail an exclusive{" "}
        <strong className=" text-foreground font-semibold">
          {" "}
          25% discount
        </strong>{" "}
        on the subscription!
      </p>

      <Image
        src="https://cdn.prod.website-files.com/606392a644232d174453ec02/66ccf046a5b8b00d091c288c_msb_devices_medium.webp"
        alt="Med School Bootcamp on different devices"
        width={2400}
        height={1350}
        sizes="(max-width: 479px) 93vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, 95vw"
        quality={75}
        className=" object-cover mt-20"
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 mt-20 ">
        <div className="xl:hidden">
          <h2 className="text-4xl leading-tight font-semibold text-center xl:text-left">
            Practice with the most representative questions
          </h2>
          <p className="mt-6 text-lg text-center text-muted-foreground">
            Learn faster, study smarter, and excel in clerkships
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/606392a644232d174453ec02/63f786ee4d32a2de97503951_slide_2-p-800.png"
          className=" max-w-[600px] mx-auto rounded-lg shadow-md"
          alt="bootcamp"
        />
        <div className="my-auto hidden xl:block">
          <h2 className="text-4xl leading-tight font-semibold text-center md:text-left">
            Practice with the most representative questions
          </h2>
          <div className=" prose dark:prose-invert prose-zinc prose-lg mt-8">
            <ul>
              <li>
                <strong> 2,200+ high-yield Step 1 questions</strong> based on
                student feedback.
              </li>
              <li>Exam-like software interface and content.</li>

              <li>
                <strong>Weekly updates</strong> to maintain high standards of
                excellence.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        <div className="my-auto">
          <h2 className="text-4xl font-semibold leading-tight text-center md:text-left">
            Master medicine with high-yield videos and quizzes
          </h2>
          <div className=" prose dark:prose-invert prose-zinc prose-lg mt-8">
            <ul>
              <li>
                <strong>Short videos</strong> that teach you how to{" "}
                <strong>think like a physician</strong>.
              </li>

              <li>
                <strong>Bite-sized quizzes</strong> follow each video to{" "}
                <strong>reinforce active learning</strong>.
              </li>

              <li>
                <strong>Board-style questions</strong> explained{" "}
                <strong>step-by-step</strong>.
              </li>
            </ul>
          </div>
        </div>
        <img
          src="https://cdn.prod.website-files.com/606392a644232d174453ec02/641496d5109e550fca553adc_msb_video-p-800.jpeg"
          className=" max-w-[500px] mx-auto rounded-lg shadow-md"
          alt="Bootcamp"
        />
      </div>
      <h2 className=" text-center text-4xl font-semibold mt-24">
        Study medicine in one place - not all over the place.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
        <div className="relative  h-0 w-full pb-[56.25%]">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gU04FIsRzMo?si=ig56EbGApoDu_2At"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" prose dark:prose-invert prose-zinc">
          <ul>
            <li>
              <strong>High-quality short videos</strong> that teach you how to
              think like a physician.
            </li>
            <li>
              <strong>Bite-sized quizzes</strong> follow each video to reinforce
              active learning.
            </li>
            <li>
              <strong> 2,200+ high-yield Step 1 questions</strong> based on
              student feedback.
            </li>
            <li>Exam-like software interface and content.</li>

            <li>
              Vivid illustrations make difficult concepts easy to understand.
            </li>
            <li>
              <strong>500+ real-life cadaveric images</strong> in our question
              banks.
            </li>
            <li>
              <strong>707+ bite-sized videos</strong> teach you anatomy from the
              ground-up.
            </li>

            <li>
              <a href="https://bootcamp.com/med-school" target="_blank">
                Learn more about Med School Bootcamp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className=" text-center text-4xl font-semibold mt-24">
        Sign Up for Code
      </h2>
      <div className="mt-8 max-w-2xl mx-auto">
        <Script
          src="https://tally.so/widgets/embed.js"
          //   onLoad={Tally.loadEmbeds()}
        />

        <iframe
          data-tally-src="https://tally.so/embed/nrV84v?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="276"
          title="Contact form"
        ></iframe>
        <p className="text-muted-foreground text-sm mt-2">
          If the form does not load, please{" "}
          <a
            href="https://tally.so/r/nrV84v"
            className=" text-foreground font-medium underline"
            target="_blank"
          >
            click here
          </a>{" "}
          to fill it out.
        </p>
      </div>
      <p className=" text-sm text-muted-foreground  mt-20">
        © Some of the content on this page is copyrighted by Bootcamp.com™ and
        is used with permission from their website.
      </p>
    </div>
  );
}
