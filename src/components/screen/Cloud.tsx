import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function CloudPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-linear-to-t from-[#c2dde6] to-white pt-24 pb-32 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          {/* Hero Content */}
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a5b8f] leading-tight">
              Ask us about <br className="hidden md:block" /> Microsoft 365 for
              your business
            </h1>
            <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
              If you are considering migrating to the cloud, let Total Solutions
              IT guide you on your journey. Our team of accredited specialists
              have the expertise and reputation to support a smooth and
              successful cloud transition. We will work closely with you to
              assess your needs and choose the platform that is right for you.
              Our team will assist with each step of the journey - from
              implementation, through adoption and to optimisation.
            </p>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { label: "Benifits", href: "#benifits" },
                { label: "Services", href: "#services" },
              ].map((btn) => (
                <a
                  href={btn.href}
                  key={btn.label}
                  className="group flex cursor-pointer items-center justify-between px-6 py-4 bg-[#1a365d] hover:bg-[#2a4a7f] text-white text-sm font-semibold rounded-xl shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {btn.label}
                  <ChevronRight className="w-4 h-4 text-sky-300 group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>

            {/* Support Link */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-col items-start gap-3">
              <p className="text-sky-700 font-semibold text-sm">
                Cloud Services Questions?
              </p>
              <button className="px-6 py-2.5 bg-white border border-sky-200 text-sky-700 text-xs font-bold tracking-wider uppercase rounded-full shadow-sm hover:bg-[#2a4a7f] hover:text-white cursor-pointer transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/internet/hero.png"
              alt="Internet connectivity devices"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>

        {/* Curved bottom shape */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.23,28.79,158.46,59.39,235.9,67.65,264.44,70.67,293.12,61.7,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* ================= BENIFITS GRID SECTION ================= */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        id="benifits"
      >
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
          Right application, right scale, right cost
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              title: "Scalability",
              desc: "Scale infrastructure up or down easily based on point in time needs. Whether it’s increasing storage capacity, computing power, or network bandwidth, the cloud provides flexibility to meet fluctuating demands without the need for significant upfront investments.",
            },
            {
              title: "Accessibility",
              desc: "The cloud enables employees to access data, applications, and resources – anytime, from anywhere. This fosters remote work, collaboration across distributed teams, and increases productivity by eliminating geographical constraints.",
            },
            {
              title: "Enhanced security",
              desc: "Cloud provides advanced security protocols, encryption techniques, and monitoring systems to ensure data privacy and protection against unauthorised access.",
            },
            {
              title: "Cost efficiencies",
              desc: "Rather than investing in expensive hardware and software upfront, organisations can pay for cloud resources on a subscription or consumption basis – eliminating the need for maintaining and upgrading expensive infrastructure.",
            },
            {
              title: "Business continuity",
              desc: "By leveraging the cloud, enterprises can implement effective disaster recovery plans, ensuring that critical data and applications are protected and can be quickly restored in the event of an outage or other unforeseen circumstance.",
            },
            {
              title: "Rapid deployment",
              desc: "Quickly deploy applications and services, reducing time-to-market for new products or features. Ready-to-use infrastructure and development tools, allows developers to focus on coding rather than setting up and configuring hardware and software.",
            },
            {
              title: "Innovation and agility",
              desc: "Experiment and innovate at a faster pace with cutting-edge technologies, such as artificial intelligence, machine learning, and big data analytics.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="border-2 border-blue-100 hover:border-blue-300 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                • {feature.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4">{feature.desc}</p>
              <a
                href="#"
                className="text-blue-600 font-semibold text-sm hover:underline"
              >
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES GRID SECTION ================= */}
      <section className="py-20 bg-slate-50" id="services">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Cloud Services for the modern business
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Microsoft 365",
                img: "/images/cloud/microsoft365.jpg",
                desc: "Total Solutions IT will help you get the most out of your Microsoft 365 service.",
              },
              {
                title: "Windows 365",
                img: "/images/cloud/windows365.jpg",
                desc: "Virtual windows machines hosted on the Microsoft Azure service.",
              },
              {
                title: "Microsoft Azure",
                img: "/images/cloud/azure.png",
                desc: "Cloud Based hosting for IAAS(infrastructure as a service)",
              },
              {
                title: "Entra ID",
                img: "/images/cloud/entra.jpg",
                desc: "Microsoft Entra ID is a cloud-based identity and access management solution.",
              },
              {
                title: "Data Backup",
                img: "/images/cloud/backup.jpg",
                desc: "Protecting your data, both onsite and cloud based solutions.",
              },
              {
                title: "Email Signature Management",
                img: "/images/cloud/email.jpg",
                desc: "Easily manage your email signatures from a central location",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
