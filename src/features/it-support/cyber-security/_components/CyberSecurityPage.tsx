"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import {
  topServices,
  gridServices,
  cyberFaqs,
  partnerLogos,
  cyberSecurityHeroData,
} from "@/features/it-support/cyber-security/data/cyberSecurityData";

function CyberCard({
  title,
  text,
  hasLink,
}: {
  title: string;
  text: string;
  hasLink?: boolean;
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`relative bg-white rounded-xl shadow-[0_5px_30px_-10px_rgba(0,0,0,0.05)] border-2 p-6 pt-10 text-center flex flex-col items-center z-10 transition-all duration-300 ${
        touched
          ? "border-blue-300 -translate-y-1"
          : "border-blue-100 hover:border-blue-300 hover:-translate-y-1"
      }`}
    >
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
        <Check size={16} strokeWidth={3} className="text-white" />
      </div>
      <h4 className="font-bold text-slate-800 mb-3 text-[15px] leading-tight">
        {title}
      </h4>
      <p className="text-[13px] text-slate-500 leading-relaxed mb-5 grow text-justify">
        {text}
      </p>
      {hasLink && (
        <a
          href="#"
          className="text-blue-600 text-[12px] font-bold flex items-center hover:underline mt-auto tracking-wide"
        >
          <span className="mr-1">&gt;</span> LEARN MORE
        </a>
      )}
    </div>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {cyberFaqs.map((faq, index) => {
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

export default function CyberSecurityPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* HERO SECTION  */}
      <Hero data={cyberSecurityHeroData} />

      {/* Section 1: Cyber Security Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 pr-0 md:pr-8 flex flex-col justify-start pt-4">
            <h2 className="text-blue-600 font-bold text-xl mb-6 tracking-wide">
              Cyber Security
            </h2>
            <p className="text-slate-600 text-sm mb-6 leading-loose text-justify">
              Managed Cyber Security Services are standard solutions for large
              businesses, enterprise-level companies, and even Small to Medium
              Enterprises (SME). Cybersecurity has become essential for modern
              business operations and continuity.
            </p>
            <p className="text-slate-600 text-sm leading-loose text-justify">
              At Cyber, information security is prioritized above all else.
              Cyber Security Services are tailored to safeguard your IT
              Infrastructure and data against cyber threats. We deliver
              end-to-end security solutions and 24/7 monitoring to keep your
              business secure.
            </p>
          </div>

          {topServices.map((service, idx) => (
            <CyberCard key={idx} {...service} />
          ))}

          {gridServices.map((service, idx) => (
            <CyberCard key={`grid-${idx}`} {...service} />
          ))}
        </div>
      </section>

      {/* Section 2: Security is a Necessity */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        id="cybersecurity"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <HoverableContentCard>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                Security is a Necessity
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                Ensure Your Business Is
                <br />
                Caught Up
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                As businesses expand, their digital exposure increases, making
                cybersecurity a top priority. Ransomware, data breaches, and
                insider threats are becoming more sophisticated, posing serious
                risks to operations, reputation, and financial stability.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed text-justify">
                Proactive cybersecurity measures, such as threat monitoring,
                data encryption, and employee training, help protect your
                critical assets. By staying ahead of cyber threats, you can
                ensure business continuity and maintain the trust of your
                clients and partners.
              </p>
            </HoverableContentCard>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <Image
              src="/images/it-support/cyber-security/section-1.png"
              alt="Security Shield Illustration"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 3: What is Cyber Security */}
      <section className="bg-white">
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/it-support/cyber-security/section-2.png"
                alt="What is Cyber Security Illustration"
                height={400}
                width={400}
                className="object-cover"
              />
            </div>
            <div>
              <HoverableContentCard>
                <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                  What is Cyber Security
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  How Does It Work
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                  Cybersecurity is the practice of protecting systems, networks,
                  and programs from digital attacks. These cyberattacks are
                  usually aimed at accessing, changing, or destroying sensitive
                  information; extorting money from users; or interrupting
                  normal business processes.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed text-justify">
                  Implementing effective cybersecurity measures is particularly
                  challenging today because there are more devices than people,
                  and attackers are becoming more innovative. Cybersecurity
                  solutions combine technology, processes, and people to create
                  a multi-layered defense system.
                </p>
              </HoverableContentCard>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What We Do */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <HoverableContentCard>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                To Protect Your Data
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                Cyber Security is an essential requirement for modern
                businesses. We offer comprehensive security solutions to protect
                your IT infrastructure, sensitive data, and business operations
                against evolving threats.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed text-justify">
                Our end-to-end security services cover everything from risk
                assessment and vulnerability management to 24/7 monitoring,
                incident response, and employee awareness training.
              </p>
            </HoverableContentCard>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/it-support/cyber-security/section-3.png"
              alt="Protect Your Data Illustration"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 5: ACSC Essential Eight */}
      <section className="bg-white" id="acsc">
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
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors">
                  ESSENTIAL EIGHT STRATEGIES
                </button>
              </HoverableContentCard>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">
            FAQs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col justify-center w-full order-2 lg:order-1">
              <FaqAccordion />
            </div>{" "}
            <div className="relative h-64 md:h-150 rounded-2xl order-1 lg:order-2 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
              <Image
                src="/images/it-support/cyber-security/security.jpg"
                alt="Fiber Optic Server Cables"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Partner Logos */}
      <section className="py-16 bg-slate-50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {partnerLogos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={36}
                className="h-7 md:h-9 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

