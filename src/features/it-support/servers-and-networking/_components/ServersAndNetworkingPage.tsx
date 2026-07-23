"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import {
  ChartNoAxesGantt,
  ChartSpline,
  ChevronRight,
  LayoutPanelTop,
  Network,
  Wifi,
  WifiHigh,
} from "lucide-react";
import Image from "next/image";

interface PartnerLogo {
  name: string;
  logo: string;
}

const partnersData: PartnerLogo[] = [
  {
    name: "MikroTik",
    logo: "/images/home/how-we-do/mikrotik.png",
  },
  {
    name: "Ubiquiti",
    logo: "/images/it-support/servers-and-networking/ubiquiti.png",
  },
  {
    name: "Grandstream",
    logo: "/images/home/how-we-do/grandstream.png",
  },
  {
    name: "HPE",
    logo: "/images/home/how-we-do/hpe.png",
  },
  {
    name: "Microsoft 365",
    logo: "/images/home/how-we-do/microsoft365.png",
  },
];

function PartnerCard({ partner }: { partner: PartnerLogo }) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`flex items-center justify-center bg-white rounded-xl border shadow-xs transition-all duration-300 cursor-pointer aspect-square ${
        touched
          ? "grayscale-0 opacity-100 border-brand-hover shadow-md scale-[1.02]"
          : "border-gray-400 opacity-100 hover:grayscale-0 hover:opacity-100 hover:border-brand-hover hover:shadow-md hover:scale-[1.02]"
      }`}
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        width={130}
        height={130}
        className="object-contain max-w-full max-h-full p-2 sm:p-0.5"
      />
    </div>
  );
}

const heroData = {
  title1: "Servers &",
  title2: "Networking",
  description1:
    "Our server and networking solutions are designed to empower businesses with seamless connectivity and robust infrastructure. With a focus on reliability, scalability, and security, our tailored solutions ensure optimized performance for your organization’s digital ecosystem.",
  description2:
    "From deploying efficient server configurations to implementing high-speed networking protocols, we provide comprehensive support to enhance productivity and streamline operations. Our expertise lies in crafting customized solutions that align with your unique requirements, enabling you to stay agile in a rapidly evolving technological landscape while maximizing the potential of your IT infrastructure.",
  bgImage: "/images/it-support/servers-and-networking/hero.png",
  actionButtons: [
    { label: "NETWORKING SOLUTIONS", href: "#networking-solutions" },
    { label: "SERVER SOLUTIONS", href: "#server-solutions" },
  ],
};

const ServersAndNetworkingPage = () => {
  const { touched } = useTouchHover();
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* HERO SECTION  */}
      <Hero data={heroData} />

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-center text-3xl font-black text-slate-900 tracking-tight mb-12">
          What people are talking about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Aaron Smith | Stadelmann Enterprises",
              text: "TSIT have great professional response. Very impressed with their availability to respond to issues. Helped to migrate 30 staff from an onsite server to Microsoft 365, Email services, User account management and SharePoint. Everything went very smoothly and communication was excellent.",
            },
            {
              name: "Chris | Construction Company",
              text: "Joel and his team make it all so easy. Assisted with implementation of Defence Industry Security Program (DISP) accreditation for over 50 staff. Made it easy to understand each step of the process and ensured minimal interruption to staff during deployment.",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#2a2a2a] text-gray-200 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 relative"
            >
              <span className="text-5xl text-blue-600 absolute top-6 left-6 font-serif">
                &quot;
              </span>
              <p className="mt-8 mb-6 text-sm leading-relaxed">
                {testimonial.text}
              </p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          <div className="">
            <div className="mb-12">
              <h2 className="text-center text-3xl font-black text-slate-900 tracking-tight mt-3">
                Our Technology Partners include
              </h2>
              <p className="text-gray-800 mt-4 text-lg font-light leading-relaxed">
                Bismillah IT has forged strategic partnerships with leading
                network and server hardware providers in the industry to ensure
                that their clients receive top-notch technology solutions
                tailored to their needs. By collaborating with these providers,
                Bismillah IT gains access to cutting-edge hardware solutions,
                including servers, routers, switches, and other networking
                equipment.
              </p>
            </div>

            {/* Partner Grid with sleek border hover states */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {partnersData.map((partner, index) => (
                <PartnerCard key={index} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 1: Intro / Top Cards ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Paragraph */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-6">
              Modern technologies powered by the cloud are fundamentally
              altering our methods of work and communication.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 text-justify">
              This digital transformation relies on robust, reliable, and secure
              networking infrastructure—the backbone of any modern enterprise.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              At <strong className="text-blue-600 font-medium">Cyber</strong>,
              we offer comprehensive networking solutions tailored to meet your
              business needs, ensuring seamless communication and connectivity
              across your organization.
            </p>
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="space-y-4">
            {/* Card 1 */}
            <HoverableContentCard>
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    The Road to Transformation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    Transforming your organization requires a strategy that
                    aligns IT with business goals. Our team guides you through
                    every step of this journey, ensuring your network
                    infrastructure supports digital initiatives, improves
                    efficiency, and fosters innovation.
                  </p>
                </div>
              </div>
            </HoverableContentCard>

            {/* Card 2 */}
            <HoverableContentCard>
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    The Power of Cloud
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    Cloud computing offers unprecedented scalability,
                    flexibility, and efficiency. We help you leverage
                    cloud-based networking solutions, such as SD-WAN and
                    cloud-managed Wi-Fi, to streamline management, enhance
                    performance, and support remote work environments.
                  </p>
                </div>
              </div>
            </HoverableContentCard>

            {/* Card 3 */}
            <HoverableContentCard>
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457-.39-2.823-1.07-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    Connecting Securely
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    Security is paramount in today&apos;s connected world. Our
                    networking solutions integrate advanced security measures,
                    including firewalls, encryption, and access controls, to
                    protect your data and network from cyber threats, ensuring
                    safe and reliable connectivity.
                  </p>
                </div>
              </div>
            </HoverableContentCard>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: Solutions Overview & Image ==================== */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
          Solutions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column: Solution Feature Bars */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Networking Solutions
            </h3>

            {[
              "Network Design and Implementation",
              "Network Security",
              "Wireless Networking",
              "Network Optimization and Performance Management",
              "Cloud Networking Integration",
              "Managed Networking Services",
              "Wireless Network",
              "WAN & Advanced Networking Solutions",
            ].map((solution, idx) => (
              <div
                key={idx}
                className={`group flex cursor-pointer items-center justify-between px-6 py-4 text-white text-sm font-semibold rounded-xl shadow-md transition-all ${
                  touched
                    ? "bg-[#2a4a7f] -translate-y-0.5 shadow-lg"
                    : "bg-[#1a365d] hover:bg-[#2a4a7f] hover:-translate-y-0.5 hover:shadow-lg"
                }`}
              >
                <span className="flex justify-between items-end">
                  {solution}{" "}
                  <ChevronRight
                    className={`w-4 h-4 text-sky-300 transition-transform ${
                      touched ? "translate-x-1" : "group-hover:translate-x-1"
                    }`}
                  />
                </span>
              </div>
            ))}

            <div className="pt-4">
              <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider block mb-2">
                Ethernet
              </span>
              <button
                className={`px-6 py-2.5 bg-white border border-brand-active text-sky-700 text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm cursor-pointer transition-colors ${
                  touched
                    ? "bg-[#2a4a7f] text-white"
                    : "hover:bg-[#2a4a7f] hover:text-white"
                }`}
              >
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right Column: Fiber Cable Image */}
          <div className="flex justify-center">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/it-support/servers-and-networking/solutions.jpg"
                alt="Networking Cables and Fiber Connectors"
                height={500}
                width={600}
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: Networking Solutions (Dark Theme) ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white w-full">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Networking Solutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                Our networking solutions are designed to build a solid
                foundation for your IT environment. We focus on creating
                high-performance, resilient, and secure networks that support
                your operational needs and drive business growth.
              </p>
            </div>

            {/* Header Right Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/it-support/servers-and-networking/networking.jpg"
                alt="Network Server Rack Hardware"
                height={160}
                width={320}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Network Design and Implementation
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    We design and implement custom network architectures
                    tailored to your business requirements. Whether you&apos;re
                    setting up a new network or upgrading an existing one, our
                    experts ensure seamless integration, optimal performance,
                    and scalability to accommodate future growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Network Security
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    Protecting your network from unauthorized access and cyber
                    threats is critical. We provide robust security solutions,
                    including firewalls, intrusion detection and prevention
                    systems (IDPS), and secure access controls, to safeguard
                    your critical data and maintain compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393a15 15 0 0121.213 0"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Wireless Networking
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    In today&apos;s mobile-first world, reliable Wi-Fi is
                    essential. We offer high-density, secure wireless solutions
                    that provide seamless coverage, high speed, and secure
                    access for employees and guests alike, supporting
                    productivity across your facilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Network Optimization and Performance Management
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    Slow networks can hinder business operations. We
                    continuously monitor, analyze, and optimize your network
                    performance to ensure fast data transmission, minimize
                    downtime, and resolve issues before they impact your
                    business.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 00-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Cloud Networking Integration
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    Integrating your local network with cloud services requires
                    careful planning. We provide cloud networking solutions that
                    seamlessly connect your on-premises infrastructure with
                    public, private, or hybrid clouds, ensuring secure and
                    high-speed data transfer.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Managed Networking Services
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    Outsource your network management to Cyber. Our team
                    delivers 24/7 proactive monitoring, regular maintenance,
                    patch management, and rapid troubleshooting, allowing your
                    internal team to focus on strategic business initiatives
                    while maintaining top network efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: Wireless Network ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Wireless Network
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Our wireless networking solutions deliver reliable, high-speed,
              and secure connectivity across your organization. From office
              spaces to enterprise campuses, we design and deploy Wi-Fi
              infrastructure tailored to support your operational needs and
              modern workplace demands.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/it-support/servers-and-networking/wireless.jpg"
              alt="Ceiling Wireless Access Point Device"
              height={160}
              width={320}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* 6 White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <HoverableContentCard>
            <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                <span className="text-blue-600 font-bold -mt-1">
                  <WifiHigh />
                </span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  Wireless Network Design and Planning
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  We perform comprehensive site surveys and heat mapping to
                  design optimal Wi-Fi layouts. This ensures maximum coverage,
                  eliminates dead zones, and provides seamless connectivity for
                  high-density user environments, guaranteeing reliable network
                  access across your entire facility.
                </p>
              </div>
            </div>
          </HoverableContentCard>

          {/* Card 2 */}
          <HoverableContentCard>
            <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                <span className="text-blue-600 font-bold -mt-1">
                  <WifiHigh />
                </span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  Access Point Deployment and Configuration
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Our team handles the professional installation and
                  configuration of enterprise-grade Access Points (APs). We
                  optimize channel allocation and transmission power to prevent
                  interference and maximize network throughput, delivering
                  consistent performance everywhere.
                </p>
              </div>
            </div>
          </HoverableContentCard>

          {/* Card 3 */}
          <HoverableContentCard>
            <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                <span className="text-blue-600 font-bold -mt-1">
                  <WifiHigh />
                </span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  Guest Wi-Fi Solutions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Provide secure Internet access for visitors without
                  compromising your primary corporate network. We create
                  isolated guest networks with customizable splash pages,
                  terms-of-use acceptance, and bandwidth controls to protect
                  your internal resources while maintaining a welcoming
                  experience.
                </p>
              </div>
            </div>
          </HoverableContentCard>

          {/* Card 4 */}
          <HoverableContentCard>
            <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                <span className="text-blue-600 font-bold -mt-1">
                  <WifiHigh />
                </span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  Wireless Security and Compliance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Protecting wireless networks requires advanced security
                  protocols. We implement WPA3 encryption, 802.1X
                  authentication, network segmentation, and wireless intrusion
                  detection systems (WIDS) to safeguard data against
                  eavesdropping, unauthorized access, and cyber threats.
                </p>
              </div>
            </div>
          </HoverableContentCard>

          {/* Card 5 */}
          <HoverableContentCard>
            <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                <span className="text-blue-600 font-bold -mt-1">
                  <WifiHigh />
                </span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  Wireless Performance Optimization
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Slow speeds or dropped connections can disrupt productivity.
                  We continuously monitor wireless performance, analyze traffic
                  patterns, and optimize RF configurations to deliver high-speed
                  access, low latency, and seamless roaming across all connected
                  devices.
                </p>
              </div>
            </div>
          </HoverableContentCard>

          {/* Card 6 */}
          <HoverableContentCard>
            <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                <span className="text-blue-600 font-bold -mt-1">
                  <WifiHigh />
                </span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  Integration with Modern Technologies
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Modern wireless networks support more than laptops and
                  smartphones. We integrate Wi-Fi solutions with IoT devices,
                  smart building technologies, location services, and VoIP
                  applications to empower smart workplace capabilities and
                  improve operational agility.
                </p>
              </div>
            </div>
          </HoverableContentCard>
        </div>
      </section>

      {/* ==================== SECTION 5: WAN & Advanced Networking Solutions (Dark Theme) ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                WAN & Advanced networking solutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                At Cyber, we deliver Wide Area Network (WAN) and advanced
                networking solutions designed to connect multiple office
                locations, cloud environments, and remote employees seamlessly
                and securely.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/it-support/servers-and-networking/advanced.jpg"
                alt="Router Fiber Ports and Ethernet Cables"
                height={160}
                width={320}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Top 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Internet Service
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    A reliable internet connection is fundamental to any
                    business operation. We help you source, implement, and
                    manage high-speed, enterprise-grade Internet Service
                    Provider (ISP) connections, including dedicated fiber,
                    broadband, and wireless links, tailored to meet your
                    bandwidth demands and performance SLAs.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Redundant Internet Systems
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    Downtime can disrupt productivity and lead to lost revenue.
                    We implement redundant Internet solutions featuring
                    automatic failover mechanisms, combining multiple ISP
                    connections or cellular backup (LTE/5G). This ensures
                    continuous uptime so your business remains online even if a
                    primary provider experiences an outage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Highlighted Card */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-6">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Advanced Networking Solutions
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    Explore our WAN and advanced networking solutions below,
                    engineered to deliver reliable, secure, and high-performance
                    connectivity tailored to your enterprise needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 5 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <span className="text-white font-bold">
                    <Wifi size={16} />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    SD-WAN (Software-Defined Wide Area Network)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    Simplify WAN management with Software-Defined WAN
                    technology. SD-WAN dynamically routes traffic across the
                    best available paths (MPLS, broadband, LTE), optimizing
                    application performance, reducing connection costs, and
                    providing centralized control over your distributed network.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <span className="text-white font-bold">
                    <Network size={16} />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Virtual Private Networks (VPNs)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    Secure remote access and site-to-site connectivity with
                    robust VPN solutions. We deploy IPsec and SSL VPNs that
                    encrypt data in transit, ensuring remote employees and
                    branch offices can securely connect to company resources.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <span className="text-white font-bold">
                    <ChartSpline size={16} />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Load Balancing and Traffic Management
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    Optimize bandwidth utilization and guarantee application
                    availability with intelligent load balancing. Our traffic
                    management solutions distribute data evenly across multiple
                    paths to avoid bottlenecks and improve user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <span className="text-white font-bold">
                    <LayoutPanelTop size={16} />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Network Virtualization and Segmentation
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    Enhance security and manageability by segmenting your
                    network into isolated virtual subnetworks (VLANs). Network
                    virtualization limits threat propagation and enforces
                    granular access control across departments.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 (Spans full width on md screens for balance) */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 md:col-span-2 max-w-2xl mx-auto w-full">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <span className="text-white font-bold">
                    <ChartNoAxesGantt size={16} />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Unified Threat Management (UTM)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    Consolidate your security functions into a single platform.
                    UTM combines firewalls, VPN, antivirus, content filtering,
                    and intrusion prevention to deliver end-to-end protection
                    against complex cyber threats across your WAN.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServersAndNetworkingPage;
