import RSAPLogo from "../icons/logo";

export default function Footer() {
  const footerNavs = [
    {
      href: "",
      name: "About",
    },
    {
      href: "",
      name: "Membership",
    },
    {
      href: "",
      name: "Committees",
    },

    {
      href: "",
      name: "Suuport",
    },
  ];

  return (
    <footer className=" text-muted-foreground border-t px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <RSAPLogo className="fill-rsap size-10 mx-auto" />
        <p className="leading-relaxed mt-2 text-[15px]">
          Radiological Students Association of the Pakistan (RSAP) is a
          non-profit organization that provides free medical services to the
          poor and underprivileged. RSAP is a member of the International
          Society of Radiological Professionals (ISRP).
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li key={idx} className=" hover:text-primary">
            <a key={idx} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0 text-sm">
          &copy; 2024 Radiological Students&apos; Association of the Pakistan
          (RSAP) All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">Social Media Icosn</ul>
        </div>
      </div>
    </footer>
  );
}
