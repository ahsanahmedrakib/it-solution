"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";
import SocialIcons from "./SocialIcons";
import UtilityLinks from "./UtilityLinks";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const mobileOpenRef = useRef(false);

  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (mobileOpenRef.current) {
        lastScrollY.current = y;
        return;
      }
      if (y < 10) {
        setHidden(false);
      } else if (y > lastScrollY.current + 5) {
        setHidden(true);
      } else if (y < lastScrollY.current - 5) {
        setHidden(false);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 1. TOP UTILITY BAR — always visible, scrolls away naturally */}
      <div className="w-full border-b border-slate-100 bg-brand-light-bg/50 font-sans">
        <div className="mx-auto max-w-365 px-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <SocialIcons />
            <UtilityLinks />
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV — sticks to top, hides on scroll down */}
      <div
        className={`w-full bg-white border-b border-brand-subtle-border font-sans selection:bg-brand-blue selection:text-white sticky top-0 z-50 transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto px-2 max-w-365 relative">
          <div className="flex items-center justify-between py-2">
            {/* Logo Section */}
            <div className="flex flex-col items-start shrink-0 relative">
              <Link href="/" className="flex items-center gap-3.5 group">
                <Image
                  src={"/logo.svg"}
                  width={180}
                  height={70}
                  alt="Logo"
                  priority
                  className="object-contain"
                />
              </Link>
            </div>

            <DesktopNav />

            {/* Mobile Navigation Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                type="button"
                className="p-2 text-brand-blue hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 3. MOBILE RESPONSIVE DRAWER & ACCORDIONS */}
        <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </>
  );
}

