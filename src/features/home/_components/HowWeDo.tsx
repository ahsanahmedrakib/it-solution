"use client";

import { partnersData } from "@/features/it-support/data/itSupportData";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import Image from "next/image";
import { PartnerLogo } from "../data/homeData";

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

export default function HowWeDo() {
  return (
    <section className="bg-linear-to-b from-gray-50 via-white to-gray-50 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Decorative Ambient Blurs */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(191,219,254,0.15) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="">
          <div className="text-center md:text-left mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-md ring-1 ring-blue-600/10">
              Ecosystem
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mt-3">
              How we do it.
            </h2>
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
  );
}

