"use client";

import Hero from "@/components/ui/Hero";
import { useTouchHover } from "@/hooks/useTouchHover";
import Image from "next/image";
import React, { useState } from "react";

// Split Content Card component matching the signature design architecture
function SplitContentCard({ children }: { children: React.ReactNode }) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 transition-all relative ${
        touched
          ? "border-blue-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          : "border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      {children}
    </div>
  );
}

export default function EndPointSecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whyNeedItems = [
    "Preventing Unauthorized Access",
    "Protecting Against Malware and Cyberattacks",
    "Data Protection",
    "Ensuring Compliance",
    "Maintaining System Integrity",
    "Preventing Data Loss",
  ];

  const heroData = {
    title1: "EndPoint Security",
    title2: "",
    description:
      "Endpoint security protects devices like computers, smartphones, and servers from cyber threats. It includes antivirus, anti-malware, firewalls, and real-time threat detection to prevent unauthorized access, malware, and data breaches. This protection is vital for securing individual devices and the broader network they connect to.",
    bgImage: "/images/it-support/cyber-security/cloud-and-network/hero.png",
    actionButtons: [
      { label: "WHY IS IT NEEDED", href: "#why-need" },
      { label: "DEFENDER FOR BUSINESS", href: "#defender-for-business" },
      { label: "SENTINEL ONE", href: "#sentinel-one" },
      { label: "BIT DEFENDER", href: "#bit-defender" },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      <Hero data={heroData} />
      {/* ==================== SECTION 1: Endpoint Security Overview ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Text Overview Card */}
          <div className="order-2 lg:order-1">
            <SplitContentCard>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p className="text-justify">
                  <strong className="text-blue-600 font-medium">
                    Endpoint protection
                  </strong>{" "}
                  plays a critical role in{" "}
                  <strong className="text-blue-600 font-medium">
                    {"safeguarding an organization's digital assets"}
                  </strong>
                  . In an increasingly connected world, every device connected
                  to your network is a potential entry point for cyber threats.
                  Implementing robust endpoint security ensures that all
                  laptops, desktops, mobile devices, and servers are protected
                  against malicious activities.
                </p>

                <p className="text-justify">
                  <strong className="text-blue-600 font-medium">
                    Endpoint protection
                  </strong>{" "}
                  encompasses a suite of security tools designed to defend
                  enterprise networks against cyber threats. It focuses on
                  securing individual endpoints—such as workstations, laptops,
                  mobile devices, and servers—that connect to the corporate
                  network. By deploying{" "}
                  <strong className="text-blue-600 font-medium">
                    advanced threat detection, antivirus software, data
                    encryption, and access controls
                  </strong>
                  , endpoint security prevents unauthorized access and mitigates
                  security risks.
                </p>

                <p className="text-justify">
                  At{" "}
                  <strong className="text-blue-600 font-medium">Cyber</strong>,
                  our Endpoint Security services are designed to protect every
                  endpoint across your organization. We deliver{" "}
                  <strong className="text-blue-600 font-medium">
                    comprehensive solutions that combine proactive threat
                    detection, real-time monitoring, and automated response
                    capabilities
                  </strong>{" "}
                  to keep your business safe from ransomware, malware, and
                  sophisticated cyberattacks.
                </p>

                <p className="text-justify">
                  Our{" "}
                  <strong className="text-blue-600 font-medium">
                    Endpoint Security Solutions
                  </strong>{" "}
                  provide comprehensive coverage against malware, phishing,
                  ransomware, and zero-day exploits. With 24/7 monitoring,
                  automated patch management, and{" "}
                  <strong className="text-blue-600 font-medium">
                    endpoint detection and response (EDR)
                  </strong>
                  , we ensure that your business endpoints remain secure and
                  resilient against evolving cyber threats.
                </p>

                <p className="text-justify">
                  We offer tailored solutions that meet the{" "}
                  <strong className="text-blue-600 font-medium">
                    specific needs of your business
                  </strong>
                  , ensuring that your devices and data are protected without
                  compromising productivity.{" "}
                  <strong className="text-blue-600 font-medium">
                    Partner with us to strengthen your endpoint defense and
                    maintain complete control over your security posture.
                  </strong>
                </p>
              </div>
            </SplitContentCard>
          </div>

          {/* Right Column: Computer Dashboard Illustration */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/it-support/cyber-security/endpoint-security/section-1.webp"
                alt="Endpoint Protection Dashboard on Computer Screen"
                height={400}
                width={500}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ==================== SECTION 2: Why do you need EndPoint Protection? ==================== */}
      <section
        className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
        id="why-need"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Phone Lock Key Illustration */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-sm aspect-square">
              <Image
                src="/images/it-support/cyber-security/endpoint-security/section-2.png"
                alt="Mobile Security and Lock Key Illustration"
                height={400}
                width={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Why Need List Card */}
          <div>
            <SplitContentCard>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                Why do you need EndPoint Protection?
              </h2>

              <div className="space-y-3">
                {whyNeedItems.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-100 rounded-xl bg-slate-50/70 overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full flex justify-between items-center px-5 py-3.5 text-left cursor-pointer hover:bg-slate-100/80 transition-colors"
                      >
                        <span className="font-medium text-xs sm:text-sm text-slate-800 flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0"></span>
                          {item}
                        </span>
                        <span className="text-slate-400 text-xs">
                          {isOpen ? "▲" : "▼"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-3.5 pt-1 text-xs text-slate-600 border-t border-slate-100 bg-white text-justify">
                          Endpoint protection guarantees {item.toLowerCase()}{" "}
                          across all connected devices within your network
                          ecosystem.
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </SplitContentCard>
          </div>
        </div>
      </section>
      {/* ==================== SECTION 3: Main Solutions Section Heading ==================== */}
      <section className="pt-12 pb-6 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          EndPoint Security Solutions
        </h2>
      </section>
      {/* ==================== SECTION 4: Microsoft Defender for Business ==================== */}
      <section
        className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
        id="defender-for-business"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Solution Card */}
          <div className="order-2 lg:order-1">
            <SplitContentCard>
              {/* Header Icon + Title */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    Microsoft Defender for Business
                  </h3>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                    Enterprise-grade protection for small- and medium-sized
                    businesses
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 text-justify">
                Microsoft Defender for Business offers enterprise-grade security
                tailored for small and medium-sized businesses. It provides
                comprehensive protection against threats, including malware,
                ransomware, and phishing attacks, empowering businesses to work
                securely.
              </p>

              {/* Key Features Header */}
              <h5 className="font-bold text-slate-900 text-xs sm:text-sm mb-3">
                Key Features
              </h5>

              {/* Feature Bars */}
              <div className="space-y-2 mb-6">
                {[
                  "Ransomware Protection",
                  "Automated Investigation and Response",
                  "Threat & Vulnerability Management",
                  "Next-Generation Protection",
                  "Cross-Platform Support",
                  "Integrated Security Controls",
                  "Attack Surface Reduction",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-100 rounded-lg px-4 py-2 text-xs font-medium text-slate-700 flex items-center justify-between"
                  >
                    <span>{feature}</span>
                    <span className="text-blue-500 font-bold">›</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-6 rounded-md uppercase tracking-wider transition-colors shadow-sm">
                LEARN MORE
              </button>
            </SplitContentCard>
          </div>

          {/* Right Column: Microsoft Defender Graphic */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-56 sm:w-72 aspect-square">
              <Image
                src="/images/it-support/cyber-security/endpoint-security/defender.png"
                alt="Microsoft Defender Blue Shield Graphic"
                height={400}
                width={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ==================== SECTION 5: Sentinel One ==================== */}
      <section
        className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
        id="sentinel-one"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: SentinelOne Logo Graphic */}
          <div className="flex justify-center items-center">
            <div className="relative overflow-hidden flex justify-center">
              <Image
                src="/images/it-support/cyber-security/endpoint-security/sentinel.png"
                alt="SentinelOne Enterprise AI Security Logo"
                height={400}
                width={500}
                className="object-cover"
              />
            </div>
          </div>
          {/* Right Column: Solution Card */}
          <div>
            <SplitContentCard>
              {/* Header Icon + Title */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-purple-600 shrink-0 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    Sentinel One
                  </h3>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                    Advanced Enterprise Cyber Security AI Platform
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 text-justify">
                SentinelOne is an autonomous cybersecurity platform that offers
                real-time threat prevention and response across organization
                endpoints. It utilizes artificial intelligence to detect,
                prevent, and respond to cyber attacks in real time across the
                enterprise.
              </p>

              {/* Key Features Header */}
              <h5 className="font-bold text-slate-900 text-xs sm:text-sm mb-3">
                Key Features
              </h5>

              {/* Feature Bars */}
              <div className="space-y-2 mb-6">
                {[
                  "Real-Time Prevention and Protection",
                  "Behavioral AI and Machine Learning",
                  "Automated Threat Response",
                  "Endpoint Detection and Response (EDR)",
                  "Ransomware Rollback",
                  "Cross-Platform Protection",
                  "Visibility and Tracking",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-100 rounded-lg px-4 py-2 text-xs font-medium text-slate-700 flex items-center justify-between"
                  >
                    <span>{feature}</span>
                    <span className="text-purple-500 font-bold">›</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-6 rounded-md uppercase tracking-wider transition-colors shadow-sm">
                LEARN MORE
              </button>
            </SplitContentCard>
          </div>
        </div>
      </section>
      {/* ==================== SECTION 6: Bit Defender ==================== */}
      <section
        className="py-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
        id="bit-defender"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Right Column: Solution Card */}
          <div className="order-2 lg:order-1">
            <SplitContentCard>
              {/* Header Icon + Title */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-red-600 shrink-0 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    Bit Defender EndPoint Security
                  </h3>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                    Global Leader in Cybersecurity
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 text-justify">
                Bitdefender is a world leader in endpoint security, offering
                advanced cybersecurity solutions to safeguard businesses against
                modern threats. Its solutions provide multi-layered ransomware
                protection, behavioral analysis, and threat intelligence to keep
                your endpoints secure.
              </p>

              {/* Key Features Header */}
              <h5 className="font-bold text-slate-900 text-xs sm:text-sm mb-3">
                Key Features
              </h5>

              {/* Feature Bars */}
              <div className="space-y-2 mb-6">
                {[
                  "Advanced Threat Defense (ATD)",
                  "Anti-Ransomware Protection",
                  "Behavioral Protection",
                  "Risk Management and Analytics",
                  "Network Threat Prevention",
                  "Endpoint Detection and Response (EDR)",
                  "Centralized Management Console",
                  "Performance Optimization",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-100 rounded-lg px-4 py-2 text-xs font-medium text-slate-700 flex items-center justify-between"
                  >
                    <span>{feature}</span>
                    <span className="text-red-500 font-bold">›</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-6 rounded-md uppercase tracking-wider transition-colors shadow-sm">
                LEARN MORE
              </button>
            </SplitContentCard>
          </div>

          {/* Left Column: Bitdefender Logo Graphic */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="relative overflow-hidden flex justify-center">
              <Image
                src="/images/it-support/cyber-security/endpoint-security/bitdefender.png"
                alt="Bitdefender EndPoint Security Logo"
                height={400}
                width={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
