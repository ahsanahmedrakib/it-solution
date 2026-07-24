"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import Image from "next/image";
import { useState } from "react";

import {
  essentialEightFaqs,
  essentialEightHeroData,
} from "@/features/it-support/cyber-security/data/cyberSecurityData";

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {essentialEightFaqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-2 border-blue-100 rounded-xl overflow-hidden transition-all relative"
          >
            <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer hover:bg-slate-50 transition-colors"
            >
              <span className="font-medium text-slate-900 pr-4">
                {faq.title}
              </span>
              <span
                className={`text-2xl text-blue-600 font-semibold shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed text-justify">
                  {faq.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const EssentialEight = () => {
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* HERO SECTION  */}
      <Hero data={essentialEightHeroData} />

      {/* Section 2: ACSC Essential Eight */}
      <section className="bg-white" id="what-is-it">
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/it-support/cyber-security/acsc.png"
                alt="Australian Cyber Security Centre Logo"
                height={400}
                width={400}
                className="object-cover"
              />
            </div>
            <div>
              <HoverableContentCard>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 mt-2 uppercase tracking-tight">
                  WHAT IS ACSC ESSENTIAL EIGHT?
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                  Developed by the Australian Cyber Security Centre (ACSC), the
                  Essential Eight is a baseline set of strategies designed to
                  help organizations mitigate cyber security threats.
                  Implementing these strategies makes it significantly harder
                  for adversaries to compromise systems.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                  We help businesses implement and maintain the Essential Eight
                  strategies to build a robust defense mechanism. Contact us
                  today to learn more about how we can strengthen your
                  organization&apos;s cyber security.
                </p>
              </HoverableContentCard>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: FAQ */}
      <section className="py-20 bg-white" id="what-are-essentials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            WHAT ARE THE ESSENTIAL EIGHT?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col justify-center w-full order-2 lg:order-1">
              <FaqAccordion />
            </div>{" "}
            <div className="relative h-64 md:h-150 rounded-2xl order-1 lg:order-2 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
              <Image
                src="/images/it-support/cyber-security/essential-eight/faq.jpg"
                alt="Fiber Optic Server Cables"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 120vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EssentialEight;

