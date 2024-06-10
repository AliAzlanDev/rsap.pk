import RSAPLogo from "../icons/logo";

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
          Radiological Students Association of the Pakistan (RSAP) is a
          non-profit organization that provides free medical services to the
          poor and underprivileged. RSAP is a member of the International
          Society of Radiological Professionals (ISRP).
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
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0 text-sm">
          &copy; 2024 Radiological Students&apos; Association of the Pakistan.
          All rights reserved. Developed by Ali Azlan.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">Social Media Icosn</ul>
        </div>
      </div>
    </footer>
  );
}
