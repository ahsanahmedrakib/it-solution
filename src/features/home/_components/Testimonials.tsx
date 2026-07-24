"use client";

import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonialsData } from "../data/homeData";

function SwiperNavButton({ direction }: { direction: "prev" | "next" }) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  const label = direction === "prev" ? "Previous Slide" : "Next Slide";
  const cls =
    direction === "prev" ? "swiper-custom-prev" : "swiper-custom-next";

  return (
    <button
      aria-label={label}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`${cls} p-2 rounded-full transition-colors cursor-pointer focus:outline-none ${
        touched
          ? "text-white bg-gray-800/80"
          : "text-gray-300 hover:text-white hover:bg-gray-800/80"
      }`}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#0e1622] text-white py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ---------------- Left Column ---------------- */}
        <div className="lg:col-span-5 space-y-8">
          {/* Subtitle Badge */}
          <div className="flex items-center space-x-2 text-brand-blue font-semibold text-xl tracking-widest uppercase">
            <span>OUR TESTIMONIALS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
            What our clients <br />
            say about us
          </h2>

          {/* Big Metric Card */}
          <div className="pt-4 space-y-2">
            <div className="text-6xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white/90 to-white/20">
              25+
            </div>
            <p className="text-gray-300 font-medium text-base sm:text-lg">
              Successful IT Projects
            </p>

            {/* Star Rating */}
            <div className="flex items-center space-x-1 pt-1 text-brand-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current stroke-none" />
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- Right Column (Swiper Slider) ---------------- */}
        <div className="lg:col-span-7 relative w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".swiper-custom-prev",
              nextEl: ".swiper-custom-next",
            }}
            pagination={{
              el: ".swiper-custom-pagination",
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            className="w-full relative"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id} className="pb-12">
                <div className="space-y-8">
                  {/* Quote Text */}
                  <p className="text-xl sm:text-2xl md:text-[26px] font-normal leading-relaxed text-gray-200 text-justify">
                    &quot;{item.quote}&quot;
                  </p>

                  {/* Author Card */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      {/* Avatar Wrapper */}
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Quote Icon Badge */}
                      <div className="absolute -bottom-1 -right-1 bg-brand-secondary text-white p-1 rounded-full shadow-md">
                        <Quote className="w-3 h-3 fill-current" />
                      </div>
                    </div>

                    {/* Author Details */}
                    <div>
                      <h4 className="font-bold text-white text-base sm:text-lg leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Swiper Controls (Navigation & Pagination Dots) */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-800/60">
            <SwiperNavButton direction="prev" />

            <div className="swiper-custom-pagination flex items-center space-x-2" />

            <SwiperNavButton direction="next" />
          </div>
        </div>
      </div>
    </section>
  );
}

