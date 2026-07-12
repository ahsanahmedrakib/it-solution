import { ChevronRight } from "lucide-react";
import Image from "next/image";

const industriesData = [
  {
    title: "Professional Services",
    description:
      "Delivering specialized IT support for the legal profession by integrating technologies like Smokeball, providing trust for lawyers and legal services.",
    image: "/images/industry/industry-1.png",
  },
  {
    title: "Freight + logistics",
    description:
      "Empowering the efficiency of freight and logistics services with industry-specific IT support for streamlined operations and enhanced logistics management.",
    image: "/images/industry/industry-2.png",
  },
  {
    title: "Agriculture, farming, breeding + microbials",
    description:
      "Cultivating growth in agriculture and microbial services through specialized IT support, fostering technological resiliency and innovation in the field.",
    image: "/images/industry/industry-3.png",
  },
  {
    title: "Community + aged care facilities",
    description:
      "Compassionate and reliable IT support tailored to enhance the well-being of individuals and organizations in this sector.",
    image: "/images/industry/industry-4.png",
  },
  {
    title: "Vet, healthcare, fertility + medical",
    description:
      "Experienced with Genie and MedicalDirector, providing for a seamless blend of technology and compassion for enhanced patient care.",
    image: "/images/industry/industry-5.png",
  },
  {
    title: "Real estate + storage facilities",
    description:
      "Operational excellence in real estate and storage facilities through specialized IT support services.",
    image: "/images/industry/industry-6.png",
  },
  {
    title: "Engineering + Science",
    description:
      "IT support services catering to the distinctive requirements of smooth, reliable operation and compliance within the engineering industry.",
    image: "/images/industry/industry-7.png",
  },
  {
    title: "Accounting, bookkeeping + financial",
    description:
      "Explore our security-focused IT support services, elevating efficiency and compliance for accounting and financial sectors.",
    image: "/images/industry/industry-8.png",
  },
  {
    title: "Construction + project management",
    description:
      "Discover our specialized IT support services catering to ensuring seamless operations and efficiency in the building industry.",
    image: "/images/industry/industry-9.png",
  },
  {
    title: "Non-profit, government + professional",
    description:
      "Driving meaningful impact and success to organizations of all sizes, budgets and institutions.",
    image: "/images/industry/industry-10.png",
  },
];

const IndustriesPage = () => {
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-linear-to-t from-[#c2dde6] to-white pt-24 pb-32 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          {/* Hero Content */}
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a5b8f] leading-tight">
              Industry-Specific <br className="hidden md:block" /> IT Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
              Tailored technology support designed to meet the unique demands of
              your industry, ensuring compliance, efficiency, and growth.
            </p>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {["Healthcare", "Construction", "Logistics", "Accounting"].map(
                (btn) => (
                  <button
                    key={btn}
                    className="group flex items-center justify-between px-6 py-4 bg-[#1a365d] hover:bg-[#2a4a7f] text-white text-sm font-semibold rounded-xl shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {btn}
                    <ChevronRight className="w-4 h-4 text-sky-300 group-hover:translate-x-1 transition-transform" />
                  </button>
                ),
              )}
            </div>

            {/* Support Link */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-col items-start gap-3">
              <p className="text-sky-700 font-semibold text-sm">
                Need IT solutions for your industry?
              </p>
              <button className="px-6 py-2.5 bg-white border border-sky-200 text-sky-700 text-xs font-bold tracking-wider uppercase rounded-full shadow-sm hover:bg-[#2a4a7f] hover:text-white cursor-pointer transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/industry/hero.png"
              alt="Industry IT Solutions"
              width={400}
              height={300}
              className="object-cover"
            />
          </div>
        </div>

        {/* Curved bottom shape */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.23,28.79,158.46,59.39,235.9,67.65,264.44,70.67,293.12,61.7,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center text-brand-active mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {industriesData.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndustriesPage;
