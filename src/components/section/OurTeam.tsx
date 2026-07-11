import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Facebook: FaFacebookF,
  X: FaXTwitter,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
};

const teamMembers = [
  {
    id: 1,
    name: "Tamzid Hasan",
    role: "IT Consultant",
    bgLabel: "Consultant",
    image: "/images/home/team/1.png",
    social: [
      { label: "Facebook", href: "#" },
      { label: "X", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    id: 2,
    name: "Tanzim Hasan Anik",
    role: "Director",
    bgLabel: "Director",
    image: "/images/home/team/2.jpg",
    social: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    id: 3,
    name: "Habibullah Mezbah",
    role: "Web Developer",
    bgLabel: "Developer",
    image: "/images/home/team/3.png",
    social: [
      { label: "Facebook", href: "#" },
      { label: "X", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    id: 4,
    name: "Ahsan Ahmed Rakib",
    role: "Software Engineer",
    bgLabel: "Engineer",
    image: "/images/home/team/4.jpg",
    social: [
      { label: "Facebook", href: "#" },
      { label: "X", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

export default function OurTeam() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xl font-bold tracking-widest text-brand-blue uppercase">
            OUR TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
            Meet our expert team memebers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group cursor-pointer flex flex-col">
              {/* ------------ Image Card ------------ */}
              <div className="relative w-full aspect-4/5 rounded-xl bg-gray-100">
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  {/* Profile Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Dark Gradient Overlay for bottom text legibility */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#111620]/90 via-[#111620]/20 to-transparent transition-opacity duration-300" />
                </div>

                {/* Vertical Large Background Text */}
                <div className="absolute -right-2 bottom-4 origin-bottom-right -rotate-90 select-none pointer-events-none">
                  <span className="text-white/20 text-6xl font-extrabold tracking-wide uppercase">
                    {member.bgLabel}
                  </span>
                </div>

                {/* Orange Hover Social Menu */}
                <div className="absolute left-4 bottom-4 bg-[#f05c26] text-white p-3 rounded-lg shadow-xl flex flex-col gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-10">
                  {member.social?.map(({ label, href }) => {
                    const Icon = socialIconMap[label];
                    if (!Icon) return null;
                    return (
                      <Link
                        key={label}
                        href={href}
                        className="hover:text-white/80 transition-colors"
                        aria-label={label}
                        target="_blank"
                      >
                        <Icon className="w-4 h-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* ------------ Member Info ------------ */}
              <div className="mt-5 space-y-1">
                <p className="text-[13px] font-semibold text-gray-500 tracking-wide">
                  / {member.role} /
                </p>
                <h3 className="text-xl font-bold text-[#111620] group-hover:text-[#f05c26] transition-colors duration-300">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

