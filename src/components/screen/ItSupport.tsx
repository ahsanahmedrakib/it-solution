import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  HardDrive,
  Lock,
  Monitor,
  MonitorCloud,
  Network,
  Phone,
  Server,
  Shield,
  Wifi,
  Wrench,
} from "lucide-react";
import Image from "next/image";

export default function ItSupport() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden font-sans text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-linear-to-b from-[#f3f5ff] via-[#f9f5ff] to-white pt-24 pb-32 lg:pt-32 lg:pb-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              IT Support Services <br />
              <span className="text-blue-600 block mt-2">
                for Professionals.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              We provide enterprise-grade IT support and secure digital
              workspaces for small to medium businesses. Focus on your growth
              while we handle the technology.
            </p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-3 max-w-lg">
              {[
                "IT Support",
                "Cyber Security",
                "Servers & Networking",
                "Device Repair",
                "Cloud Services",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-full shadow-sm hover:bg-blue-600 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 flex items-center gap-2">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Illustration (Placeholder) */}
          {/* <div className="relative w-full h-100 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
            <div className="relative z-10 w-4/5 h-4/5"> */}
          <Image
            src="/images/it-support/hero.png"
            alt="IT Support Illustration"
            height={400}
            width={400}
          />
          {/* </div>
          </div> */}
        </div>

        {/* Bottom SVG Wave */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0 rotate-180">
          <svg
            className="relative block w-full h-25"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* ================= PARTNERS SECTION ================= */}
      <section className="bg-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-8 text-center lg:text-left">
            Our Partners
          </p>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Partner Logos placeheld by text for structural accuracy */}
            {["Microsoft", "HP", "Lenovo", "Veeam", "Datto", "Cisco"].map(
              (partner) => (
                <div
                  key={partner}
                  className="text-2xl font-black text-slate-400"
                >
                  {partner}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ================= CORE FEATURES LOOP ================= */}
      <div className="bg-slate-50 py-24 space-y-32">
        {/* 1. Our Capabilities */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
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
                  "24/7 IT Support",
                  "Strategic Planning",
                  "Cloud Integrations",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-blue-700 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 mr-3 text-blue-500" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-75 w-full">
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
              <div
                key={i}
                className="flex flex-col h-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                {card.icon}

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {card.title}
                </h3>

                <p className="text-slate-600 mb-4 text-sm">{card.text}</p>

                {/* Used flex-wrap and gap-2 for better tag wrapping, and mb-6 to push it away from the bottom link */}
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

                {/* mt-auto pushes this element to the very bottom of the flex container */}
                <a
                  href="#"
                  className="mt-auto text-blue-600 font-medium flex items-center text-sm hover:text-blue-800"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Cyber Security */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 items-center mb-12">
            <div className="order-2 lg:order-1 relative h-75 w-full flex justify-center">
              <div className="relative w-full max-w-md h-full">
                <Image
                  src="/images/it-support/laptop.png"
                  alt="Cyber Security"
                  height={300}
                  width={300}
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
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
              { icon: <Shield />, label: "CLOUD RISK ASSESSMENT" },
              { icon: <CheckCircle2 />, label: "VULNERABILITY ASSESSMENT" },
              { icon: <Database />, label: "WEB APPLICATION FIREWALL" },
              { icon: <Network />, label: "SECURITY AWARENESS TRAINING" },
              { icon: <Network />, label: "DARK WEB MONITORING" },
              { icon: <Network />, label: "INCIDENT RESPONSE" },
              { icon: <Network />, label: "PENETRATION TESTING" },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 w-36 md:w-44 hover:bg-blue-50 transition-colors"
              >
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-3">
                  {feature.icon}
                </div>
                <span className="text-xs font-semibold text-center text-slate-700">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Servers + Networking */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
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

            <div className="relative h-75 w-full">
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
              { icon: <Server />, label: "PROJECT SUPPORT" },
              { icon: <Network />, label: "DEVICE SUPPORT" },
              { icon: <Cpu />, label: "SERVER SUPPORT" },
              { icon: <HardDrive />, label: "DESKTOP SUPPORT" },
              { icon: <HardDrive />, label: "24/4 MONITORING & SUPPORT" },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 w-36 md:w-44 hover:bg-blue-50 transition-colors"
              >
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-3">
                  {feature.icon}
                </div>
                <span className="text-xs font-semibold text-center text-slate-700">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Managed IT Services */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1 relative h-75 w-full">
              <Image
                src="/images/it-support/it.jpg"
                alt="Managed Services"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 lg:order-2 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
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
              { icon: <Monitor />, label: "IT SUPPORT" },
              { icon: <Wrench />, label: "NETWORK SERVICES" },
              { icon: <Database />, label: "IT PROCUREMENT" },
              { icon: <Phone />, label: "IT CONNECTIVITY" },
              { icon: <Phone />, label: "IT COMMUNICATION" },
              { icon: <Phone />, label: "IT OUTSOURCING" },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 w-36 md:w-44 hover:bg-blue-50 transition-colors"
              >
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-3">
                  {feature.icon}
                </div>
                <span className="text-xs font-semibold text-center text-slate-700">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Device Repair */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
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

            <div className="relative h-75 w-full">
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
              { icon: <Monitor />, label: "MOBILE PHONE" },
              { icon: <Wrench />, label: "LAPTOP'S" },
              { icon: <Database />, label: "DESKTOP'S" },
              { icon: <Phone />, label: "TABLETS" },
              { icon: <Phone />, label: "SERVER'S" },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 w-36 md:w-44 hover:bg-blue-50 transition-colors"
              >
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-3">
                  {feature.icon}
                </div>
                <span className="text-xs font-semibold text-center text-slate-700">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
