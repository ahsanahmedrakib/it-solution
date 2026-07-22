"use client";

import { useTouchHover } from "@/hooks/useTouchHover";
import Image from "next/image";
import Hero from "../ui/Hero";

const heroData = {
  title1: "Ask us about",
  title2: "Microsoft 365 for your business",
  description:
    "If you are considering migrating to the cloud, let Total Solutions IT guide you on your journey. Our team of accredited specialists have the expertise and reputation to support a smooth and successful cloud transition. We will work closely with you to assess your needs and choose the platform that is right for you. Our team will assist with each step of the journey - from implementation, through adoption and to optimisation.",
  bgImage: "/images/cloud/hero.png",
  actionButtons: [
    { label: "Benifits", href: "#benifits" },
    { label: "Services", href: "#services" },
  ],
};

function CloudServiceCard({
  service,
}: {
  service: { title: string; img: string; desc: string };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 flex flex-col group transition-all duration-300 ${
        touched
          ? "border-blue-300 shadow-xl -translate-y-1"
          : "border-blue-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            touched ? "scale-105" : "group-hover:scale-105"
          }`}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-slate-900 mb-3">
          {service.title}
        </h3>
        <p className="text-sm text-slate-600">{service.desc}</p>
      </div>
    </div>
  );
}

export default function CloudPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={heroData} />

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
              desc: "Scale infrastructure up or down easily based on point in time needs. Whether it's increasing storage capacity, computing power, or network bandwidth, the cloud provides flexibility to meet fluctuating demands without the need for significant upfront investments.",
            },
            {
              title: "Accessibility",
              desc: "The cloud enables employees to access data, applications, and resources - anytime, from anywhere. This fosters remote work, collaboration across distributed teams, and increases productivity by eliminating geographical constraints.",
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
              className="border-2 border-blue-100 hover:border-blue-300 relative rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all"
            >
              {" "}
              <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
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
              <CloudServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
