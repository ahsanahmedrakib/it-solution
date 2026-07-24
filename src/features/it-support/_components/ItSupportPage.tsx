"use client";

import { useTouchHover } from "@/shared/hooks/useTouchHover";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Hero from "@/shared/components/ui/Hero";
import "swiper/css";

import {
  capabilitiesList,
  capabilityCards,
  cyberSecurityFeatures,
  deviceRepairFeatures,
  heroData,
  managedITFeatures,
  networkingFeatures,
  partnersData,
} from "@/features/it-support/data/itSupportData";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";

function CapabilityCard({
  card,
}: {
  card: {
    icon: React.ReactNode;
    title: string;
    text: string;
    services: string[];
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`flex flex-col h-full bg-white p-8 rounded-2xl shadow-sm border-2 transition-all relative ${
        touched
          ? "border-blue-400 shadow-lg -translate-y-1"
          : "border-blue-100 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      {card.icon}
      <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
      <p className="text-slate-600 mb-4 text-sm">{card.text}</p>
      <div className="my-1">
        {card.services.map((a) => (
          <span
            key={a}
            className="block w-fit px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mr-2 mb-2"
          >
            {a}
          </span>
        ))}
      </div>
      <a
        href="#"
        className="mt-auto text-blue-600 font-medium flex items-center text-sm hover:text-blue-800"
      >
        Read More <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
}

function FeatureItemCard({
  feature,
}: {
  feature: { icon: React.ReactNode; label: string };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border-2 w-36 md:w-44 transition-all ${
        touched
          ? "border-blue-400 bg-blue-50 shadow-md -translate-y-1"
          : "border-blue-100 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md hover:-translate-y-1"
      }`}
    >
      <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-3">
        {feature.icon}
      </div>
      <span className="text-xs font-semibold text-center text-slate-700">
        {feature.label}
      </span>
    </div>
  );
}

export default function ItSupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden font-sans text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <Hero data={heroData} />

      {/* ================= PARTNERS SECTION ================= */}
      <section className="bg-slate-50 py-12 relative z-10" id="partners">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-8 text-center lg:text-left">
            Our Partners
          </p>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 40 },
            }}
          >
            {partnersData.map((partner) => (
              <SwiperSlide
                key={partner.name}
                className="flex items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain h-20 w-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= CORE FEATURES LOOP ================= */}
      <div className="bg-slate-50 py-24 space-y-32">
        {/* 1. Our Capabilities */}
        <section
          className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8"
          id="capabilities"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <HoverableContentCard className="order-2 lg:order-1">
              <div>
                <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
                  Our Capabilities
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Total Solutions IT provides proactive IT support and strategic
                  guidance. From server installations to daily troubleshooting,
                  our expert team is ready to enhance your technological
                  efficiency.
                </p>
                <ul className="space-y-3">
                  {capabilitiesList.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center text-blue-700 font-medium"
                    >
                      <Icon className="w-5 h-5 mr-3 text-blue-500" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </HoverableContentCard>

            <div className="relative h-75 w-full order-1 lg:order-2">
              <Image
                src="/images/it-support/capablities.jpg"
                alt="Capabilities"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Capabilities Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {capabilityCards.map((card, i) => (
              <CapabilityCard key={i} card={card} />
            ))}
          </div>
        </section>

        {/* 2. Cyber Security */}
        <section
          className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8"
          id="security"
        >
          <div className="grid lg:grid-cols-2 gap-6 items-center mb-12">
            <div className="relative h-75 w-full flex justify-center">
              <div className="relative w-full max-w-md h-full">
                <Image
                  src="/images/it-support/laptop.png"
                  alt="Cyber Security"
                  height={300}
                  width={300}
                />
              </div>
            </div>
            <HoverableContentCard>
              <div>
                <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
                  Cyber Security.
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Protect your business assets with our multi-layered security
                  solutions. We identify vulnerabilities before they are
                  exploited and ensure your data remains completely secure and
                  compliant.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </HoverableContentCard>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {cyberSecurityFeatures.map((feature, i) => (
              <FeatureItemCard key={i} feature={feature} />
            ))}
          </div>
        </section>

        {/* 3. Servers + Networking */}
        <section
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          id="networking"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <HoverableContentCard className="order-2 lg:order-1">
              <div>
                <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
                  Servers + Networking
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Robust infrastructure is the backbone of your operations. We
                  design, implement, and maintain high-speed networks and
                  reliable server environments tailored to your workload.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800"
                >
                  View Infrastructure Solutions{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </HoverableContentCard>

            <div className="relative h-75 w-full order-1 lg:order-2">
              <Image
                src="/images/it-support/networking.jpg"
                alt="Servers"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {networkingFeatures.map((feature, i) => (
              <FeatureItemCard key={i} feature={feature} />
            ))}
          </div>
        </section>

        {/* 4. Managed IT Services */}
        <section className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8" id="it">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-75 w-full">
              <Image
                src="/images/it-support/it.jpg"
                alt="Managed Services"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <HoverableContentCard>
              <div>
                <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
                  Managed IT Services
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Outsource your IT management to us. We offer predictable
                  monthly costs for comprehensive support, ensuring your systems
                  are always up to date, secure, and performing optimally.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800"
                >
                  Explore Managed IT <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </HoverableContentCard>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {managedITFeatures.map((feature, i) => (
              <FeatureItemCard key={i} feature={feature} />
            ))}
          </div>
        </section>

        {/* 5. Device Repair */}
        <section
          className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 pb-20"
          id="repair"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <HoverableContentCard className="order-2 lg:order-1">
              <div>
                <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
                  Device Repair
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Hardware failures can bring work to a halt. Our skilled
                  technicians provide rapid diagnostic and repair services for
                  laptops, desktops, and peripherals to minimize your downtime.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800"
                >
                  Book a Repair <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </HoverableContentCard>

            <div className="relative h-75 w-full order-1 lg:order-2">
              <Image
                src="/images/it-support/repair.jpg"
                alt="Device Repair"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {deviceRepairFeatures.map((feature, i) => (
              <FeatureItemCard key={i} feature={feature} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

