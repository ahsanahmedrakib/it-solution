"use client";

import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ServiceItem, servicesData } from "../data/homeData";

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      key={index}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`group relative rounded-2xl p-0.5 transition-all duration-500 bg-linear-to-br border border-brand-blue ${
        touched
          ? "from-blue-500 via-indigo-500 to-cyan-400 shadow-[0_20px_40px_-15px_rgba(59,130,246,0.25)] -translate-y-1.5"
          : "from-gray-200/80 via-gray-100 to-gray-200/40 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.25)] hover:-translate-y-1.5"
      }`}
    >
      <div className="relative flex items-start space-x-5 p-6 sm:p-8 bg-white rounded-[14px] h-full w-full">
        <div
          className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-xl ring-1 ring-blue-100 transition-all duration-300 shadow-sm ${
            touched
              ? "bg-linear-to-br shadow-md"
              : "bg-brand-active group-hover:bg-linear-to-br group-hover:shadow-md"
          }`}
        >
          <div
            className={`transition-colors duration-300 ${
              touched ? "text-white" : "group-hover:text-white"
            }`}
          >
            {service.icon}
          </div>
        </div>

        <div className="space-y-2">
          <h3
            className={`text-xl font-bold text-gray-900 tracking-tight transition-colors duration-300 ${
              touched ? "text-brand-active" : "group-hover:text-brand-active"
            }`}
          >
            {service.title}
          </h3>
          <p className="text-gray-500 text-sm sm:text-base font-light leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section className="bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Decorative Ambient Blurs */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(191,219,254,0.15) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-md ring-1 ring-blue-600/10">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-4">
                What we do.
              </h2>
            </div>
            <p className="text-gray-500 max-w-md mt-4 md:mt-0 text-sm sm:text-base font-light leading-relaxed">
              We engineer tailor-made network frameworks, telephony setups, and
              secure operational logic pipelines optimized for peak
              availability.
            </p>
          </div>

          {/* Upgraded Modern Cards Layout with Eye-Catching Borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

