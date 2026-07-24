"use client";

import { industriesData, heroData } from "@/features/industries/data/industriesData";
import Hero from "@/shared/components/ui/Hero";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import Image from "next/image";

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

