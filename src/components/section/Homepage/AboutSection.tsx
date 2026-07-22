"use client";

import { useTouchHover } from "@/hooks/useTouchHover";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

function NavLink({ btn }: { btn: { label: string; href: string } }) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <Link
      href={btn.href}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`inline-flex items-center justify-center px-7 py-3 text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-lg shadow-xl transition-all duration-200 group border border-slate-700/30 ${
        touched
          ? "bg-[#12273d] shadow-2xl"
          : "bg-[#17324d] hover:bg-[#12273d] hover:shadow-2xl"
      }`}
    >
      <span>{btn.label}</span>
      <span className={`ml-2 transform text-base leading-none transition-transform ${
        touched ? "translate-x-1" : "group-hover:translate-x-1"
      }`}>
        &rsaquo;
      </span>
    </Link>
  );
}

function AboutImage() {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 ${
        touched ? "scale-[1.01]" : "hover:scale-[1.01]"
      }`}
    >
      <Image
        src="/images/home/about.jpeg"
        alt="Bismillah Computer landscape view"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        className="object-cover"
        priority
      />
    </div>
  );
}

export default function AboutSection() {
  const navButtons = [
    { label: "OUR SERVICES", href: "#services" },
    { label: "QUICK SUPPORT", href: "#support" },
    { label: "NBN STATUS", href: "#nbn-status" },
  ];

  // Initialize the tsparticles engine
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="w-full font-sans antialiased text-gray-800">
      {/* ---------------- Top Navigation Bar ---------------- */}
      <header className="relative w-full border-t border-t-brand-active bg-white py-10 md:py-12 overflow-hidden">
        {/* ---------------- 3D Network Background ---------------- */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0 z-0 pointer-events-none"
          options={{
            fullScreen: { enable: false }, // Keeps particles confined to this container
            fpsLimit: 60,
            particles: {
              color: {
                value: "#5ba4e5", // Light blue nodes matching your theme
              },
              links: {
                color: "#5ba4e5",
                distance: 120,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce", // Keeps them from drifting off screen
                },
                random: true,
                speed: 0.8, // Slow, elegant movement like the video
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100, // Number of nodes
              },
              opacity: {
                value: 0.6,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "grab", // Connects nodes to the mouse pointer
                },
              },
              modes: {
                grab: {
                  distance: 200, // How far the pointer reaches to grab nodes
                  links: {
                    opacity: 0.6,
                    color: "#5ba4e5",
                  },
                },
              },
            },
          }}
        />

        {/* ---------------- Foreground Content ---------------- */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {navButtons.map((btn, idx) => (
              <NavLink key={idx} btn={btn} />
            ))}
          </nav>
        </div>
      </header>

      {/* ---------------- Main Hero Section ---------------- */}
      <section className="bg-brand-active text-white py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <AboutImage />
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 md:space-y-6">
            <div className="space-y-1 md:space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Bismillah Computer
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/95 leading-snug">
                Local company, local people.
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
              We offer our services to small businesses, medium-sized businesses
              and private customers in Albury, Wodonga and surrounding areas.
              Bismillah Computer has the skills and the capacity to guide you
              through planning, design, implementation and ongoing management of
              your IT infrastructure at a low cost.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
