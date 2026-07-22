"use client";

import { useTouchHover } from "@/hooks/useTouchHover";

import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Briefcase,
  Bug,
  Cloud,
  Cpu,
  Eye,
  GraduationCap,
  HardDrive,
  HeadphonesIcon,
  Laptop,
  Link,
  Lock,
  MessageSquare,
  Monitor,
  MonitorCloud,
  Package,
  Server,
  Shield,
  Smartphone,
  Target,
  Users,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Hero from "../common/ui/Hero";

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
    name: "N-Able",
    logo: "/images/home/how-we-do/nable.png",
  },
  {
    name: "Grandstream",
    logo: "/images/home/how-we-do/grandstream.png",
  },
  {
    name: "WordPress",
    logo: "/images/home/how-we-do/wordpress.png",
  },
  {
    name: "Microsoft 365",
    logo: "/images/home/how-we-do/microsoft365.png",
  },
  {
    name: "Ingram",
    logo: "/images/home/how-we-do/ingram.png",
  },
  {
    name: "Cellfi",
    logo: "/images/home/how-we-do/cellfi.png",
  },
  {
    name: "Ipecs",
    logo: "/images/home/how-we-do/ipecs.png",
  },
  {
    name: "HPE",
    logo: "/images/home/how-we-do/hpe.png",
  },
  {
    name: "Avaya",
    logo: "/images/home/how-we-do/avaya.png",
  },
  {
    name: "Cove",
    logo: "/images/home/how-we-do/cove.png",
  },
  {
    name: "Veeam",
    logo: "/images/home/how-we-do/veeam.png",
  },
  {
    name: "Datto",
    logo: "/images/home/how-we-do/datto.png",
  },
  {
    name: "Recaptcha",
    logo: "/images/home/how-we-do/recaptcha.png",
  },
  {
    name: "Woo",
    logo: "/images/home/how-we-do/woo.png",
  },
];

const heroData = {
  title1: "IT Support Services",
  title2: "for Professionals",
  description:
    "We provide enterprise-grade IT support and secure digital workspaces for small to medium businesses. Focus on your growth while we handle the technology.",
  bgImage: "/images/it-support/hero.png",
  actionButtons: [
    {
      label: "Our Partners",
      href: "#partners",
    },
    {
      label: "Our Capabilities",
      href: "#capabilities",
    },
    { label: "Cyber Security", href: "#security" },
    {
      label: "Servers & Networking",
      href: "#networking",
    },
    { label: "IT Services", href: "#it" },
    { label: "Device Repair", href: "#repair" },
  ],
};

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

export default function ItSupport() {
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
            <div className="order-2 lg:order-1 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative">
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
                {[
                  { icon: HeadphonesIcon, label: "24/7 IT Support" },
                  { icon: Briefcase, label: "Strategic Planning" },
                  { icon: Cloud, label: "Cloud Integrations" },
                ].map(({ icon: Icon, label }) => (
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
            {[
              {
                title: "Hardware Experience",
                icon: <HardDrive className="w-8 h-8 text-blue-600 mb-4" />,
                text: "Proactive monitoring and rapid response times for all your daily IT concerns.",
                services: [
                  "Servers/desktops/laptops",
                  "Modems/routers/access points",
                  "Printers and scanners",
                  "Phone systems and handsets",
                  "Replacement parts",
                  "Site deployment/migration",
                ],
              },
              {
                title: "Network Experience",
                icon: <Wifi className="w-8 h-8 text-blue-600 mb-4" />,
                text: "Enterprise-grade protection against malware, phishing, and external threats.",
                services: [
                  "  Wireless troubleshooting",
                  "Network segregation",
                  "Hotel/Motel infrastructure",
                  "VLAN tagging",
                  "Firewall/security setup",
                  "Routing/switching",
                ],
              },
              {
                title: "Infrastructure Experience",
                icon: <MonitorCloud className="w-8 h-8 text-blue-600 mb-4" />,
                text: "Seamless migrations to scalable cloud infrastructure for modern teams.",
                services: [
                  "File sharing and security",
                  "Domain controllers and AD",
                  "Windows operating systems",
                  "Virtual machines",
                  "Microsoft Office applications",
                ],
              },
            ].map((card, i) => (
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

            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative">
              <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
                Cyber Security.
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Protect your business assets with our multi-layered security
                solutions. We identify vulnerabilities before they are exploited
                and ensure your data remains completely secure and compliant.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Lock />, label: "ESSENTIAL 8 SECURITY" },
              { icon: <Cloud />, label: "CLOUD RISK ASSESSMENT" },
              { icon: <Bug />, label: "VULNERABILITY ASSESSMENT" },
              { icon: <Shield />, label: "WEB APPLICATION FIREWALL" },
              { icon: <GraduationCap />, label: "SECURITY AWARENESS TRAINING" },
              { icon: <Eye />, label: "DARK WEB MONITORING" },
              { icon: <AlertTriangle />, label: "INCIDENT RESPONSE" },
              { icon: <Target />, label: "PENETRATION TESTING" },
            ].map((feature, i) => (
              <FeatureItemCard key={i} feature={feature} />
            ))}
          </div>
        </section>

        {/* 3. Servers + Networking */}
        <section
          className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8"
          id="networking"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative">
              <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
                Servers + Networking
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Robust infrastructure is the backbone of your operations. We
                design, implement, and maintain high-speed networks and reliable
                server environments tailored to your workload.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                View Infrastructure Solutions{" "}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

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
            {[
              { icon: <Briefcase />, label: "PROJECT SUPPORT" },
              { icon: <Monitor />, label: "DEVICE SUPPORT" },
              { icon: <Cpu />, label: "SERVER SUPPORT" },
              { icon: <HardDrive />, label: "DESKTOP SUPPORT" },
              { icon: <Activity />, label: "24/4 MONITORING & SUPPORT" },
            ].map((feature, i) => (
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

            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative">
              <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
                Managed IT Services
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Outsource your IT management to us. We offer predictable monthly
                costs for comprehensive support, ensuring your systems are
                always up to date, secure, and performing optimally.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                Explore Managed IT <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <HeadphonesIcon />, label: "IT SUPPORT" },
              { icon: <Wifi />, label: "NETWORK SERVICES" },
              { icon: <Package />, label: "IT PROCUREMENT" },
              { icon: <Link />, label: "IT CONNECTIVITY" },
              { icon: <MessageSquare />, label: "IT COMMUNICATION" },
              { icon: <Users />, label: "IT OUTSOURCING" },
            ].map((feature, i) => (
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
            <div className="order-2 lg:order-1 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative">
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
            {[
              { icon: <Smartphone />, label: "MOBILE PHONE" },
              { icon: <Laptop />, label: "LAPTOP'S" },
              { icon: <Monitor />, label: "DESKTOP'S" },
              { icon: <Smartphone />, label: "TABLETS" },
              { icon: <Server />, label: "SERVER'S" },
            ].map((feature, i) => (
              <FeatureItemCard key={i} feature={feature} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
