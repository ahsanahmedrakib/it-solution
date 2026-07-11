import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Tamzid Hasan",
    role: "IT Consultant",
    bgLabel: "Consultant",
    image: "/images/home/team/1.png",
  },
  {
    id: 2,
    name: "Tanzim Hasan Anik",
    role: "Director",
    bgLabel: "Director",
    image: "/images/home/team/2.jpg",
  },
  {
    id: 3,
    name: "Habibullah Mezbah",
    role: "Web Developer",
    bgLabel: "Developer",
    image: "/images/home/team/3.png",
  },
  {
    id: 4,
    name: "Ahsan Ahmed Rakib",
    role: "Software Engineer",
    bgLabel: "Engineer",
    image: "/images/home/team/4.jpg",
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
              <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden bg-gray-100">
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

                {/* Vertical Large Background Text */}
                <div className="absolute -right-2 bottom-4 origin-bottom-right -rotate-90 select-none">
                  <span className="text-white/40 text-6xl font-extrabold tracking-wide uppercase mix-blend-overlay">
                    {member.bgLabel}
                  </span>
                </div>

                {/* Orange Hover Social Menu */}
                <div className="absolute left-4 bottom-4 bg-[#f05c26] text-white p-3 rounded-lg shadow-xl flex flex-col gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-10">
                  {/* Facebook Icon */}
                  <a
                    href="#"
                    className="hover:text-white/80 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  {/* X (Twitter) Icon */}
                  <a
                    href="#"
                    className="hover:text-white/80 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Instagram Icon */}
                  <a
                    href="#"
                    className="hover:text-white/80 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  {/* LinkedIn Icon */}
                  <a
                    href="#"
                    className="hover:text-white/80 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
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
