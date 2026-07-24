"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { Cpu, Database, Server, Shield, Wifi, Wrench } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  deviceRepairHeroData,
  deviceRepairPartnersData,
  faqs,
  RepairPartnerLogo,
} from "../data/deviceRepairData";

function PartnerCard({ partner }: { partner: RepairPartnerLogo }) {
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

const DeviceRepairPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* HERO SECTION */}
      <Hero data={deviceRepairHeroData} />

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Illustration Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/it-support/device-repair/about.jpg"
              alt="Repair Services Graphic"
              height={400}
              width={600}
              className="object-cover rounded-xl"
            />
          </div>

          {/* Right Column: Content Card */}
          <HoverableContentCard>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 text-justify">
              <span className="text-blue-600 font-medium">
                Computer Repair Services at Total Solutions IT
              </span>
              provide
              <span className="text-blue-600 font-medium">
                reliable, professional IT support for businesses and home users
              </span>
              experiencing technical problems with their devices. Our
              experienced technicians diagnose and repair
              <span className="text-blue-600 font-medium">
                hardware faults, software issues, virus and malware infections,
                and system performance problems
              </span>
              across desktops, laptops, and other business devices. Whether your
              computer is running slowly, failing to start, or experiencing
              system errors, our team can quickly identify the cause and restore
              your device.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              Our{" "}
              <span className="text-blue-600 font-medium">
                computer repair and IT support services
              </span>
              include:
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>
                  <strong className="text-blue-600 font-semibold">
                    Hardware diagnostics and repairs
                  </strong>{" "}
                  for desktops and laptops
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>
                  <strong className="text-blue-600 font-semibold">
                    Virus and malware removal
                  </strong>{" "}
                  to restore system security
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>
                  <strong className="text-blue-600 font-semibold">
                    Data recovery services
                  </strong>{" "}
                  for lost or corrupted files
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>
                  <strong className="text-blue-600 font-semibold">
                    Hardware upgrades and performance optimisation
                  </strong>{" "}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span>
                  <strong className="text-blue-600 font-semibold">
                    Network troubleshooting and system configuration
                  </strong>{" "}
                </span>
              </li>
            </ul>
          </HoverableContentCard>
        </div>
      </section>

      {/* ==================== BRANDS WE REPAIR ==================== */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
          Brands We Repair
        </h3>
        {/* Partner Grid with sleek border hover states */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {deviceRepairPartnersData.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>
      </section>

      <section className="bg-brand-active text-white py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          We offer an onsite residential repair service for your home computers.
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/it-support/device-repair/offer.jpg"
                alt="Bismillah Computer landscape view"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 md:space-y-6">
            <div className="space-y-1 md:space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Bismillah Computer
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/95 leading-snug">
                Local company, local people.
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
              Total Solutions IT provides reliable computer repair services for
              home users, helping resolve common issues such as slow computers,
              startup failures, virus infections, and system errors. If your
              computer isn’t working properly, our experienced technicians are
              ready to help.
              <br />
              <br /> One of our qualified technicians can visit your home at a
              convenient time to diagnose and repair most problems onsite. We
              carry a range of common replacement parts and diagnostic tools,
              allowing many computer repairs to be completed during the first
              visit.
              <br /> <br />
              If a repair requires additional work, we will clearly explain the
              issue and take your computer to our workshop for further testing
              and repair. Once completed, your system will be fully tested,
              optimised, and ready to use. <br />
              <br />
              Where available, we can also provide temporary loan computers so
              you are not left without access while repairs are underway. <br />
              <br />
              Clear advice. Honest pricing. Local technicians you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 1: Repair Services ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Content Card */}
          <div className="order-2 lg:order-1">
            <HoverableContentCard>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <Wrench size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Repair Services
                  </h3>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    Professional Laptop & PC Repair Services
                  </h2>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                We offer{" "}
                <span className="text-blue-600 font-medium">
                  professional computer repair and maintenance services
                </span>{" "}
                to keep your devices running smoothly, ensuring fast and
                reliable solutions for all major brands.
              </p>

              <h4 className="font-bold text-slate-800 text-sm mb-3">
                Key Repair Features:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Diagnostic & Troubleshooting:
                    </strong>{" "}
                    Comprehensive diagnostics to identify hardware and software
                    issues accurately.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Hardware Upgrades:
                    </strong>{" "}
                    Upgrading RAM, SSDs, and replacing damaged components.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Software & System Repair:
                    </strong>{" "}
                    Fixing operating system crashes, driver issues, and blue
                    screen errors.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Virus & Malware Removal:
                    </strong>{" "}
                    Thoroughly cleaning infected systems and installing robust
                    antivirus protection.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Laptop Screen & Keyboard Repair:
                    </strong>{" "}
                    Replacing broken screens, faulty batteries, and damaged
                    keyboards.
                  </span>
                </li>
              </ul>
            </HoverableContentCard>
          </div>

          {/* Right Column: Illustration Image */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <Image
              src="/images/it-support/device-repair/repair.jpg"
              alt="Repair Services Graphic"
              height={400}
              width={600}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: Security & Cleanup Services ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/it-support/device-repair/security.jpg"
              alt="Security & Cleanup Services Graphic"
              height={400}
              width={600}
              className="object-cover rounded-xl"
            />
          </div>

          {/* Right Column: Content Card */}
          <div>
            <HoverableContentCard>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Security Services
                  </h3>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    Security & Cleanup Services
                  </h2>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Protect your systems from{" "}
                <span className="text-blue-600 font-medium">
                  malicious threats
                </span>{" "}
                and optimize performance with our comprehensive security and
                cleanup services.
              </p>

              <h4 className="font-bold text-slate-800 text-sm mb-3">
                Key Security & Cleanup Features:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Malware & Spyware Removal:
                    </strong>{" "}
                    Complete elimination of malicious software, spyware, and
                    adware.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Antivirus Setup:
                    </strong>{" "}
                    Installing and configuring industry-standard antivirus and
                    anti-malware software.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      System Optimization:
                    </strong>{" "}
                    Cleaning up temporary files, registry bloat, and optimizing
                    startup programs for speed.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Firewall Configuration:
                    </strong>{" "}
                    Setting up and configuring robust firewalls to block
                    unauthorized network access.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Security Audits:
                    </strong>{" "}
                    Regular vulnerability scans and security health checks to
                    protect your data.
                  </span>
                </li>
              </ul>
            </HoverableContentCard>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: Data & Backup Services ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Content Card */}
          <div className="order-2 lg:order-1">
            <HoverableContentCard>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <Database size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Data Solutions
                  </h3>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    Data & Backup Services
                  </h2>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Ensure your valuable data is{" "}
                <span className="text-blue-600 font-medium">
                  safe, secure, and easily recoverable
                </span>{" "}
                with our advanced data backup and recovery solutions.
              </p>

              <h4 className="font-bold text-slate-800 text-sm mb-3">
                Key Data & Backup Features:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Data Recovery Services:
                    </strong>{" "}
                    Recovering lost, deleted, or corrupted data from hard
                    drives, SSDs, and external storage media.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Cloud Backup Solutions:
                    </strong>{" "}
                    Setting up automated, secure cloud backups for continuous
                    data protection.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Local & External Backups:
                    </strong>{" "}
                    Configuring external hard drives and NAS systems for
                    reliable local backups.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Automated Backup Setup:
                    </strong>{" "}
                    Scheduling automated backup routines to prevent data loss
                    without manual intervention.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Disaster Recovery Planning:
                    </strong>{" "}
                    Developing comprehensive recovery plans to ensure business
                    continuity in case of hardware failure or cyber attacks.
                  </span>
                </li>
              </ul>
            </HoverableContentCard>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <Image
              src="/images/it-support/device-repair/data.jpg"
              alt="Data & Backup Services Graphic"
              height={400}
              width={600}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: Networking & Setup Services ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/it-support/device-repair/networking.jpg"
              alt="Networking & Setup Services Graphic"
              height={400}
              width={600}
              className="object-cover rounded-xl"
            />
          </div>

          {/* Right Column: Content Card */}
          <div>
            <HoverableContentCard>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <Wifi size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Network Services
                  </h3>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    Networking & Setup Services
                  </h2>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Build a{" "}
                <span className="text-blue-600 font-medium">
                  fast, reliable, and secure network infrastructure
                </span>{" "}
                for your home or office environment.
              </p>

              <h4 className="font-bold text-slate-800 text-sm mb-3">
                Key Networking Features:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Router & Wi-Fi Setup:
                    </strong>{" "}
                    Professional installation and configuration of routers,
                    switches, and wireless access points for seamless coverage.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Network Troubleshooting:
                    </strong>{" "}
                    Diagnosing and resolving connectivity drops, slow speeds,
                    and IP conflicts.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      LAN/WAN Configuration:
                    </strong>{" "}
                    Setting up local area networks and wide area networks for
                    efficient communication.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Printer & Peripheral Setup:
                    </strong>{" "}
                    Connecting and configuring printers, scanners, and
                    network-attached storage (NAS).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Cloud Printing & Sharing:
                    </strong>{" "}
                    Setting up secure file sharing and cloud printing across
                    multiple devices.
                  </span>
                </li>
              </ul>
            </HoverableContentCard>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: New Computers & Upgrades ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Content Card */}
          <div className="order-2 lg:order-1">
            <HoverableContentCard>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Hardware Services
                  </h3>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    New Computers & Upgrades
                  </h2>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Looking for a{" "}
                <span className="text-blue-600 font-medium">
                  new computer or custom build
                </span>
                ? We help you choose and set up the right hardware for your
                needs.
              </p>

              <h4 className="font-bold text-slate-800 text-sm mb-3">
                Key Hardware Features:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Custom PC Building:
                    </strong>{" "}
                    Designing and assembling high-performance custom PCs
                    tailored for gaming, editing, or business.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Laptop & Desktop Sales:
                    </strong>{" "}
                    Expert guidance in selecting the best pre-built computers
                    and laptops within your budget.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Data Transfer & Setup:
                    </strong>{" "}
                    Transferring all your files, settings, and applications from
                    your old computer to your new one.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Software Installation:
                    </strong>{" "}
                    Installing operating systems, productivity suites, and
                    essential software.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      System Tuning:
                    </strong>{" "}
                    Optimizing new computers for peak performance right out of
                    the box.
                  </span>
                </li>
              </ul>
            </HoverableContentCard>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <Image
              src="/images/it-support/device-repair/computer.jpg"
              alt="New Computers & Upgrades Graphic"
              height={400}
              width={600}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* SECTION - 6 FAQS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Computer Repair FAQ
          </h2>
          <div className="space-y-4 mx-auto">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border-2 border-blue-100 rounded-xl overflow-hidden transition-all relative"
                >
                  <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-medium text-slate-900 pr-4">
                      {faq.question}
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
                      <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: IT Services ==================== */}

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/it-support/device-repair/it-services.jpg"
              alt="New Computers & Upgrades Graphic"
              height={400}
              width={600}
              className="object-cover rounded-xl"
            />
          </div>

          {/* Right Column: Content Card */}
          <div className="order-2 lg:order-1">
            <HoverableContentCard>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <Server size={20} />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  IT Services
                </h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                We provide uses leading-edge technologies and infrastructure to
                deliver a quality service to our clients. This enables us to
                deliver high-performing, reliable, and secure solutions.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed my-4">
                Our on-demand support team is reactive, knowledgeable, and ready
                to help at any time of the day. We offer 24/7 support for all of
                our clients. Our managed-it team also works to ensure that your
                systems are running at 100% and any problems are anticipated and
                dealt with before they happen.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We can ensure that your systems are always available to you by
                offering desktop and laptop repair at low cost. We understand
                that a system failure should not get in the way of your
                productivity.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-4">
                Our team of network engineers and support technicians know how
                your system works. When there is a problem on your network, or
                with your servers, we can get you back up to speed in no time.
                Existing systems are also catered for by our team, and we work
                hard to optimise your network and server infrastructure for your
                business needs.
              </p>
            </HoverableContentCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DeviceRepairPage;
