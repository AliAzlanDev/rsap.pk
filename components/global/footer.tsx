import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import LinkedInIcon from "../icons/linkedin";
import RSAPLogo from "../icons/logo";
import XIcon from "../icons/x";
import YoutubeIcon from "../icons/youtube";

export default function Footer() {
  const footerNavs = [
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/join",
      name: "Membership",
    },

    {
      href: "/contact",
      name: "Contact us",
    },
  ];

  return (
    <footer className=" text-muted-foreground border-t px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-2xl sm:mx-auto sm:text-center">
        <RSAPLogo className="fill-rsap size-10 mx-auto" />
        <p className="leading-relaxed mt-5 text-[15px]">
          Radiological Students&apos; Association of Pakistan (RSAP) unites
          aspiring radiological students and trainees, fostering collaborations
          to provide opportunities and enhance radiology in Pakistan.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li
            key={idx}
            className=" text-primary hover:underline hover:underline-offset-2"
          >
            <a key={idx} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between md:flex md:flex-row-reverse gap-5">
        <div className="mt-6 md:mt-0">
          <ul className="flex items-center space-x-4">
            <li>
              <a href="https://www.instagram.com/radsapakistan" target="_blank">
                <InstagramIcon className="size-8" />
              </a>
            </li>
            <li>
              <a href="https://www.x.com/radsapakistan" target="_blank">
                <XIcon className="size-7 fill-foreground" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/radsapakistan"
                target="_blank"
              >
                <LinkedInIcon className="size-7 " />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/radsapakistan" target="_blank">
                <FacebookIcon className="size-8" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@radsapakistan" target="_blank">
                <YoutubeIcon className="size-8" />
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0 text-sm">
          &copy; 2024 Radiological Students&apos; Association of Pakistan. All
          rights reserved. Developed by Ali Azlan.
        </div>
      </div>
    </footer>
  );
}
