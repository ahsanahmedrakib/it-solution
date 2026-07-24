"use client";

import { OurApproach } from "@/features/home/_components";
import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { managedITFeatures, managedItHeroData } from "../data/managedItData";

function ManagedITFeatureCard({
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
        <Icon size={50} />
      </div>
      <h3 className="text-xl font-bold text-brand-blue text-center mb-3">
        {feature.title}
      </h3>
      <p className="text-slate-600 text-sm mb-4 text-justify">{feature.desc}</p>
    </div>
  );
}

const ManagedITPage = () => {
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* HERO SECTION  */}
      <Hero data={managedItHeroData} />

      {/* ================= GRID SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-slate-600 mb-12 leading-relaxed">
          Bismillah IT is committed to meeting the IT needs of your business.
          Our dedication to providing exceptional managed IT services stems from
          an extensive understanding of the unique obstacles faced by small to
          medium-sized businesses (SMBs).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {managedITFeatures.map((feature, i) => (
            <ManagedITFeatureCard key={i} feature={feature} />
          ))}
        </div>
      </section>

      {/* APPROACH SECTION  */}
      <OurApproach />

      {/* SECTION 3*/}
      <section
        className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8"
        id="networking"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center my-12">
          <HoverableContentCard className="order-2 lg:order-1">
            <div>
              <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
                Harness Decades of IT Excellence to Enhance Your Business
                Operations
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With over 20 years of experience providing managed IT services
                to businesses in Australia, Total Solutions IT delivers
                unparalleled expertise and accountability. We recognize the
                vital role IT systems play in your operations and take the time
                to understand their complexities.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our team offers 24/7 system monitoring to ensure seamless
                business continuity, proactively identifying and resolving
                potential issues before they cause disruptions. With unlimited
                support, we’re always available to provide swift solutions to
                your IT challenges.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our managed IT plans go beyond basic support—they transform your
                IT environment into a strategic asset that propels your business
                forward.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                Book a free consultation <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>

          <div className="relative h-75 w-full order-1 lg:order-2">
            <Image
              src="/images/it-support/managed-it/section-1.jpg"
              alt="Servers"
              height={1600}
              width={1200}
              className="object-fit rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8" id="it">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative h-75 w-full">
            <Image
              src="/images/it-support/managed-it/section-2.jpg"
              alt="Managed Services"
              height={1600}
              width={1200}
              className="object-fit rounded-2xl"
            />
          </div>

          <HoverableContentCard>
            <div>
              <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
                Drive Your Digital Transformation with Cost-Effective Managed
                Services
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                At Total Solutions IT, we believe your IT systems should align
                with your business needs—not be constrained by your service
                provider’s limitations.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We take the time to gain a thorough understanding of your
                business, including your IT infrastructure, long-term
                strategies, objectives, and daily operations. With this insight,
                we craft a tailored service level agreement (SLA) that delivers
                the right technology solutions—rather than a generic,
                one-size-fits-all approach.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our commitment to exceptional customer service has earned us
                prestigious awards, highlighting our dedication to consistently
                exceeding your expectations.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                Book a free consultation <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>
        </div>
      </section>
    </main>
  );
};

export default ManagedITPage;
