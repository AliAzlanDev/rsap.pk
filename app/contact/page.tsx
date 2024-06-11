import Script from "next/script";

export default function Contact() {
  return (
    <div className="container-x py-20 prose dark:prose-invert prose-zinc">
      <h1>Contact Us</h1>
      <p>
        We are here to assist you with any inquiries or support you may need.
      </p>

      <iframe
        data-tally-src="https://tally.so/embed/wvBE94?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="276"
        title="Contact form
"
      ></iframe>

      <Script
        src="https://tally.so/widgets/embed.js"
        //   onLoad={Tally.loadEmbeds()}
      />
    </div>
  );
}
