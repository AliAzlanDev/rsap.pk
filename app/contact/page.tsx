"use client";
import Script from "next/script";

export default function Contact() {
  return (
    <div className="container-x py-20 prose dark:prose-invert prose-zinc">
      <h1>Contact Us</h1>
      <p>
        We are here to assist you with any inquiries or support you may need.
        You can reach us by email at{" "}
        <a href="mailto:radsapakistan@gmail.com">radsapakistan@gmail.com</a> or
        by using the form below.
      </p>

      <Script
        src="https://tally.so/widgets/embed.js"
        //   onLoad={Tally.loadEmbeds()}
      />

      <iframe
        data-tally-src="https://tally.so/embed/wvBE94?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="276"
        title="Contact form"
      ></iframe>
    </div>
  );
}
