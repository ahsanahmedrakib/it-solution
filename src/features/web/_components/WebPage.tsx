"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { heroData, webFeatures, serviceListData, webPartnerLogos } from "@/features/web/data/webData";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

function WebFeatureCard({
  feature,
}: {
  feature: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = feature.icon;

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <div className="flex justify-center pb-6 text-brand-active">
        <Icon size={80} />
      </div>
      <h3 className="text-xl font-bold text-brand-blue text-center mb-3">
        {feature.title}
      </h3>
      <p className="text-slate-600 text-sm mb-4 text-justify">{feature.desc}</p>
    </div>
  );
}

function ServiceListCard({
  feature,
}: {
  feature: { title: string; services: string[] };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`relative border-2 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
      {feature.services.map((service, j) => (
        <div key={j} className="flex items-start mb-3">
          <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-blue-500 shrink-0" />
          <span className="text-slate-600 text-sm">{service}</span>
        </div>
      ))}
      <a
        href="#"
        className="text-blue-600 font-semibold text-sm hover:underline pt-2"
      >
        Read More &rarr;
      </a>
    </div>
  );
}

export default function WebPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={heroData} />

      {/* ================= GRID SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
          Services that make your Website Perform
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {webFeatures.map((feature, i) => (
            <WebFeatureCard key={i} feature={feature} />
          ))}
        </div>
      </section>

      {/* ================= SPLIT SECTION 1 ================= */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <HoverableContentCard>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
              Your website represents your company.
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              In the digital age of today, a well-crafted website serves not
              only as a virtual storefront but also as a powerful tool for small
              businesses to establish a strong online presence. In fact, it
              reflects your business by showcasing your products, services, and
              brand identity to a global audience 24/7.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Moreover, it provides a centralized platform for customers to
              learn about your offerings, engage with your content, and make
              convenient purchases. Additionally, a professional website
              instills credibility, thereby building trust among potential
              customers. As a result, it sets you apart from competitors, both
              now and in the future. Consequently, investing in a quality
              website is essential for long-term success.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium flex items-center hover:text-blue-800"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              More
            </a>
          </HoverableContentCard>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/web/web.png"
              alt="Working seamlessly online"
              height={400}
              width={400}
              className="object-cover"
            />{" "}
          </div>
        </div>
      </section>

      {/* ================= SPLIT SECTION 2 ================= */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Illustration */}
          <div className="flex justify-center order-2 lg:order-1">
            <Image
              src="/images/web/seo.png"
              alt="Working seamlessly online"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <HoverableContentCard>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
              Keeping you online, without the hassle.
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Opting for our NBN services provides you with additional peace of
              mind and convenience compared to dealing with mainstream,
              large-scale internet connectivity. We understand the importance of
              supporting our communities and our commitment extends to providing
              tailored internet solutions that cater to the unique needs of the
              area.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With a focus on customer satisfaction, our local support team is
              readily available to assist you, offering a personalized touch to
              your internet experience. By choosing us for NBN and local
              internet solutions, you are not just accessing cutting-edge
              technology, but also supporting a local business that invests in
              the well-being and connectivity of your local community.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium flex items-center hover:text-blue-800"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              More
            </a>
          </HoverableContentCard>
        </div>
      </section>

      {/* ================= GRID SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceListData.map((feature, i) => (
            <ServiceListCard key={i} feature={feature} />
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* LOGO SECTION  */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-8"> */}
        <div className="flex flex-wrap justify-center gap-12">
          {webPartnerLogos.map((a) => (
            <Image
              key={a.logo}
              src={a.logo}
              alt={a.logo}
              width={180}
              height={50}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

