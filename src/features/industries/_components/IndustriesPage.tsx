"use client";

import Hero from "@/shared/components/ui/Hero";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
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

const heroData = {
  title1: "Industry-Specific",
  title2: "IT Solutions",
  description1:
    "Tailored technology support designed to meet the unique demands of your industry, ensuring compliance, efficiency, and growth.",
  bgImage: "/images/industry/hero.png",
  actionButtons: [
    {
      label: "Healthcare",
      href: "/healthcare",
    },
    {
      label: "Construction",
      href: "/construction",
    },
    { label: "Logistics", href: "/logistics" },
    {
      label: "Accounting",
      href: "/accounting",
    },
  ],
};

function IndustryCard({
  service,
}: {
  service: (typeof industriesData)[number];
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 flex flex-col group transition-all duration-300 ${
        touched
          ? "border-blue-300 shadow-xl -translate-y-1"
          : "border-blue-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            touched ? "scale-105" : "group-hover:scale-105"
          }`}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-slate-900 mb-3">
          {service.title}
        </h3>
        <p className="text-sm text-slate-600">{service.description}</p>
      </div>
    </div>
  );
}

const IndustriesPage = () => {
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* ================= HERO SECTION ================= */}
      <Hero data={heroData} />

      {/* Industries Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center text-brand-active mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {industriesData.map((service, i) => (
              <IndustryCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndustriesPage;

