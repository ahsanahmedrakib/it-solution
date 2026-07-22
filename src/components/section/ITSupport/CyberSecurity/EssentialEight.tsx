"use client";

import Hero from "@/components/common/ui/Hero";
import HoverableContentCard from "@/components/common/ui/HoverableContentCard";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    title: "Application Control",
    description:
      "This relates to the level of application control and constraints you have over user applications and the ability for staff to execute unapproved and malicious programs on workstations. This includes .exe, DLL, scripts and installers.",
  },
  {
    title: "Application Patching",
    description:
      "Updating third-party applications quickly is essential for ensuring the latest security updates and patches are in place. For example, using the latest version of applications and patches of web browsers, Microsoft Office, Java and PDF viewers. This requires frequent use of security vulnerability scanners to detect missing patches and updates as well as removing solutions that are no longer supported by their vendors.",
  },
  {
    title: "Configure Microsoft Office Macro Settings",
    description:
      "This is the amount of freedom your users have to run macros in Microsoft Office applications. Most users should have macros blocked as default unless they have a specific organisational requirement. Only allow vetted macros, either in ‘trusted locations’ with limited write access or digitally signed with a trusted certificate.",
  },
  {
    title: "User Application Hardening",
    description:
      "Limitations should be placed on user applications. At its most basic, web browsers should block Flash, ads and Java, with users unable to change these settings. Disable unneeded features in Microsoft Office (such as OLE), and in web browsers and PDF viewers. Internet Explorer 11 should also be disabled.",
  },
  {
    title: "Restrict Administrative Privileges",
    description:
      "Tightly manage administrative privileges and access to operating systems and applications based on user duties. This includes regularly revalidating requests for privileged access to systems and applications, blocking privileged accounts from accessing the internet and using separate operating environments for privileged and unprivileged users. Privileged accounts should not be used for reading email and browsing the web.",
  },
  {
    title: "Patch Operating Systems",
    description:
      "This focuses on keeping operating systems up to date to ensure that OS patches, updates, and security mitigations for internet-facing services are applied within two weeks of release. All computers and network devices with 'extreme security risk' vulnerabilities should be patched within 48 hours. Security Vulnerability scanners should also be used to identify any missing patches, and any OS that is no longer vendor supported should be replaced.",
  },
  {
    title: "Multi-factor Authentication",
    description:
      "Enforce MFA for all privileged access. Turn on MFA for VPNs, RDP, SSH and other remote access, and for all users when they access an important data repository. Maturity starts by enforcing MFA for all users before they access internet-facing services and third-party providers.",
  },
  {
    title: "Daily Bacups",
    description:
      "Perform daily backups of important new or changed data, software and configuration settings. All unprivileged accounts should be restricted to their own backup environments. Store backups disconnected from the Internet and retain them for at least three months. Test restoration initially, annually and whenever IT infrastructure changes.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
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

const heroData = {
  title1: "Essential Eight",
  title2: "",
  description:
    "The ACSC Essential Eight is a cybersecurity framework from Australia’s Cyber Security Centre, outlining eight strategies to protect against cyber threats. These include patching, application control, user access management, backups, and more, aimed at minimizing the risk of cyber attacks and ensuring robust defense for organizations.",
  bgImage: "/images/it-support/cyber-security/cloud-and-network/hero.png",
  actionButtons: [
    { label: "WHAT IS IT", href: "#what-is-it" },
    { label: "WHAT ARE ESSENTIALS", href: "#what-are-essentials" },
  ],
};

const EssentialEight = () => {
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* HERO SECTION  */}
      <Hero data={heroData} />

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
