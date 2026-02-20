import MicroscopeIcon from "../icons/microscope";
import GraduationCapIcon from "../icons/graduation-cap";
import UsersIcon from "../icons/users";
import { GlobeIcon } from "@radix-ui/react-icons";

const stats = [
  {
    value: "3",
    label: "Working Committees",
    icon: <MicroscopeIcon className="size-5" />,
  },
  {
    value: "13+",
    label: "Expert Advisors",
    icon: <GraduationCapIcon className="size-5" />,
  },
  {
    value: "3",
    label: "Key Partnerships",
    icon: <UsersIcon className="size-5" />,
  },
  {
    value: "10+",
    label: "Research Projects",
    icon: <GlobeIcon className="size-5" />,
  },
];

export default function Stats() {
  return (
    <section className="border-y bg-muted/30">
      <div className="container-x py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-2 text-muted-foreground">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-rsap">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
