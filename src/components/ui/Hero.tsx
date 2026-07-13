"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ActionButtons {
  label?: string;
  href?: string;
}

interface Data {
  title1?: string;
  title2?: string;
  description?: string;
  bgImage?: string;
  actionButtons?: ActionButtons[];
}

const Hero = ({ data }: { data: Data }) => {
  return (
    <section className="relative bg-linear-to-t from-[#c2dde6] to-white pt-24 pb-32 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-24 items-center relative z-10">
        {/* Hero Content */}
        <div className="space-y-8 order-2 lg:order-1 lg:col-span-2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            {data?.title1 && data?.title1} <br />
            {data?.title2 && (
              <span className="text-blue-600 block mt-2"> {data?.title2}</span>
            )}
          </h1>
          <p className="text-lg text-justify md:text-xl text-slate-700 font-medium leading-relaxed">
            {data?.description && data?.description}
          </p>

          {/* Action Buttons Grid */}
          {!!data?.actionButtons && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 md:w-3/4 w-full">
              {data?.actionButtons?.map(
                (btn) =>
                  btn?.href && (
                    <Link
                      href={btn.href}
                      key={btn.label}
                      className="group flex cursor-pointer items-center justify-between px-6 py-4 bg-[#1a365d] hover:bg-[#2a4a7f] text-white text-sm font-semibold rounded-xl shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {btn.label}
                      <ChevronRight className="w-4 h-4 text-sky-300 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ),
              )}
            </div>
          )}

          {/* Support Link */}
          <div className="pt-6 border-t border-slate-200/60 flex flex-col items-start gap-3">
            <p className="text-sky-700 font-semibold text-sm">Need help?</p>
            <button className="px-6 py-2.5 bg-white border border-brand-active text-sky-700 text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm hover:bg-[#2a4a7f] hover:text-white cursor-pointer transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {data?.bgImage && (
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 lg:col-span-1">
            <Image
              src={data?.bgImage}
              alt="IT Support Illustration"
              height={400}
              width={600}
            />
          </div>
        )}
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
  );
};

export default Hero;
