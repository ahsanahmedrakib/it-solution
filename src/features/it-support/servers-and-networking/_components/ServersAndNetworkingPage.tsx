"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import {
  BarChart3,
  ChartNoAxesGantt,
  ChartSpline,
  ChevronRight,
  Cloud,
  Globe,
  LayoutPanelTop,
  Network,
  RefreshCw,
  Server,
  Settings,
  ShieldCheck,
  Wifi,
  WifiHigh,
  Zap,
} from "lucide-react";
import Image from "next/image";

import {
  partnersData,
  heroData,
  testimonials,
  networkingSolutions,
  topFeatureCards,
  networkingSolutionsDetails,
  wirelessCards,
  wanTopCards,
  advancedNetworkingCard,
  wanAdvancedCards,
} from "@/features/it-support/servers-and-networking/data/serversAndNetworkingData";

import type { PartnerLogo } from "@/features/it-support/servers-and-networking/data/serversAndNetworkingData";

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
          {testimonials.map((testimonial, i) => (
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
            {topFeatureCards.map((card, i) => (
              <HoverableContentCard key={i}>
                <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-1">
                    <span className="text-blue-600">
                      <Zap size={20} />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {card.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify"
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    />
                  </div>
                </div>
              </HoverableContentCard>
            ))}
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

            {networkingSolutions.map((solution, idx) => (
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
            {networkingSolutionsDetails.map((card, i) => {
              const icons = [Server, ShieldCheck, Wifi, BarChart3, Cloud, Settings];
              const Icon = icons[i];
              return (
                <div key={i} className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                      <span className="text-white">
                        <Icon size={18} />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p
                        className="text-xs text-slate-300 leading-relaxed text-justify"
                        dangerouslySetInnerHTML={{ __html: card.description }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
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
          {wirelessCards.map((card, i) => (
            <HoverableContentCard key={i}>
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <span className="text-blue-600 font-bold -mt-1">
                    <WifiHigh />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    {card.description}
                  </p>
                </div>
              </div>
            </HoverableContentCard>
          ))}
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
            {wanTopCards.map((card, i) => {
              const icons = [Globe, RefreshCw];
              const Icon = icons[i];
              return (
                <div key={i} className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6">
                  <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                      <span className="text-white">
                        <Icon size={18} />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed text-justify">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Highlighted Card */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-6">
              <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <span className="text-white">
                    <Zap size={18} />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    {advancedNetworkingCard.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    {advancedNetworkingCard.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 5 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wanAdvancedCards.map((card, i) => {
              const icons = [Wifi, Network, ChartSpline, LayoutPanelTop, ChartNoAxesGantt];
              const Icon = icons[i];
              return (
                <div
                  key={i}
                  className={`bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 ${
                    i === 4 ? "md:col-span-2 max-w-2xl mx-auto w-full" : ""
                  }`}
                >
                  <div className="flex items-start flex-col sm:flex-row space-x-4 space-y-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                      <span className="text-white font-bold">
                        <Icon size={16} />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed text-justify">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServersAndNetworkingPage;
