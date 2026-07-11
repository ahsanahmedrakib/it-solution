import React from "react";
// Make sure to install lucide-react if you haven't: npm install lucide-react
import { Cloud, Globe, PhoneCall, Wrench } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    icon: <Wrench className="w-6 h-6 text-brand-light-bg" />,
    title: "IT Support",
    description:
      "Plan, design, implement and manage IT infrastructure for small business, medium-sized business and residential.",
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-brand-light-bg" />,
    title: "Phone Systems",
    description:
      "Providing on-demand service for supply, installation and maintenance of telephone systems.",
  },
  {
    icon: <Globe className="w-6 h-6 text-brand-light-bg" />,
    title: "Internet",
    description:
      "See what we provide in terms of internet services, including NBN, Cel-Fi, Starlink and LTE solutions.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-brand-light-bg" />,
    title: "Cloud Services",
    description:
      "Managed cloud & data solutions, securely managed across hybrid, private or public cloud platforms.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Decorative Ambient Blurs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

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
              <div
                key={index}
                className="group relative rounded-2xl p-0.5 transition-all duration-500 bg-linear-to-br from-gray-200/80 via-gray-100 to-gray-200/40 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.25)] hover:-translate-y-1.5 border border-brand-blue"
              >
                {/* Internal Card Body */}
                <div className="relative flex items-start space-x-5 p-6 sm:p-8 bg-white rounded-[14px] h-full w-full">
                  {/* Refined Geometric Icon container */}
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-brand-active ring-1 ring-blue-100 group-hover:bg-linear-to-br transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-brand-active transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
