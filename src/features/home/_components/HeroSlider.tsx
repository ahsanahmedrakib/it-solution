"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { slides } from "@/features/home/data/homeData";

export default function HeroSlider() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Swiper Window */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
          slidesPerView={1}
          loop={true}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 pb-12 md:pb-20">
                {/* Text Layout Block */}
                <div className="flex flex-col items-start space-y-4 md:space-y-6 text-left order-2 md:order-1">
                  {slide.badge && (
                    <span className="inline-block bg-[#22C55E] text-white text-xs font-semibold px-3 py-1.5 rounded-sm cursor-pointer hover:bg-green-600 transition-colors">
                      {slide.badge}
                    </span>
                  )}
                  <h1 className="whitespace-pre-line text-xl font-extrabold tracking-tight text-[#2A3342] sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
                    {slide.title}
                  </h1>
                  <p className="max-w-md text-base text-[#556987] md:text-lg">
                    {slide.subtitle}
                  </p>
                  <button className="rounded-full bg-[#3B82F6] px-8 py-3.5 text-sm font-bold text-white tracking-wide shadow-md transition-all hover:bg-blue-600 hover:shadow-lg focus:outline-none">
                    {slide.buttonText}
                  </button>
                </div>

                {/* Vector Layout Block */}
                <div className="flex justify-center order-1 md:order-2">
                  <div className="relative w-full aspect-4/3 max-w-85 sm:max-w-105 md:max-w-full h-75 sm:h-87.5 md:h-112.5">
                    <Image
                      src={slide.image}
                      alt={slide.indicatorTitle}
                      fill
                      priority={idx === 0} // Prioritize loading the very first slide image for LCP
                      sizes="(max-width: 640px) 340px, (max-width: 768px) 420px, (max-width: 1280px) 50vw, 600px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Nav & Indicators Bar */}
        <div className="mt-4 border-t border-gray-100 pt-4">
          {/* Scrollable / Grid Wrapper for Indicators */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:items-stretch md:justify-between md:gap-0 divide-x-0 md:divide-x divide-gray-200">
            {slides.map((slide, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => swiperInstance?.slideToLoop(idx)}
                  className={`group relative flex flex-col items-start p-3 text-left transition-all outline-none md:flex-1 md:px-4 ${isActive ? "border-t-3 border-t-brand-blue" : "border-t-3 border-t-white"}`}
                >
                  {/* Visual Top Slider Indicator Bar */}
                  <span
                    className={`absolute top-0 left-0 h-.75 transition-all duration-300 ${
                      isActive
                        ? "w-full bg-[#3B82F6]"
                        : "w-0 bg-transparent group-hover:w-1/2 group-hover:bg-gray-300"
                    }`}
                  />

                  {/* Indicator Meta Info */}
                  <span className="text-[11px] leading-tight text-gray-400 font-medium md:text-xs line-clamp-2 min-h-8">
                    {slide.indicatorTitle}
                  </span>
                  <span
                    className={`mt-1 text-xs font-bold leading-tight md:text-sm ${
                      isActive ? "text-[#2A3342]" : "text-gray-500"
                    }`}
                  >
                    {slide.indicatorSubtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}