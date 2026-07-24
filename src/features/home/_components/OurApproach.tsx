"use client";

import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { CheckCheck } from "lucide-react";
import { ApproachCardItem, approachData } from "../data/homeData";

function ApproachCard({
  item,
  index,
}: {
  item: ApproachCardItem;
  index: number;
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`group relative flex flex-col h-full rounded-2xl bg-linear-to-b from-[#161f30] to-[#0f1522] border p-8 transition-all duration-300 ${
        touched
          ? "-translate-y-2 border-blue-500/50 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)]"
          : "border-gray-800 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)]"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-gray-700 to-transparent rounded-t-2xl transition-all duration-500 ${
          touched ? "via-blue-500" : "group-hover:via-blue-500"
        }`}
      />

      <div className="flex justify-center mb-8">
        <CheckCheck size={30} className="text-brand-blue" strokeWidth={3} />
      </div>

      <div className="text-center mb-6">
        <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3 py-1 rounded-full">
          Stage 0{index + 1}
        </span>
        <h3 className="text-2xl font-bold text-white mt-4 mb-2 tracking-tight">
          {item.stepNumber}
        </h3>
        <h4 className="text-lg font-semibold text-gray-300 px-2 min-h-14 flex items-center justify-center">
          {item.title}
        </h4>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed font-light mb-8 text-justify">
        {item.subtitle}
      </p>

      <div className="mt-auto pt-6 border-t border-gray-800/60">
        <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
          {item.listHeading}
        </h5>
        <ul className="space-y-3 text-sm text-gray-300">
          {item.points.map((point, pIdx) => (
            <li key={pIdx} className="flex items-start space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span className="leading-tight font-light">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function OurApproach() {
  return (
    <section className="bg-[#0b0f19] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Aesthetic Background glow accents — using fixed-size composited layers */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xl font-bold tracking-wider text-blue-500 uppercase mb-3">
            Our Approach
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            Complete 360° Care of Your IT.
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light text-justify">
            At Total Solutions IT, we take a proactive, end-to-end approach to
            managing your technology. Our proven three-stage framework
            transforms IT from a constant frustration into a reliable, secure,
            and scalable business asset — supporting what you need today while
            preparing you for tomorrow.
          </p>
        </div>

        {/* Responsive Grid System (Equal Height Cards via h-full) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {approachData.map((item, index) => (
            <ApproachCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

