"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";
import SocialIcons from "./SocialIcons";
import UtilityLinks from "./UtilityLinks";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-brand-subtle-border font-sans selection:bg-brand-blue selection:text-white relative">
      {/* 1. TOP UTILITY BAR */}
      <div className="w-full border-b border-slate-100 bg-brand-light-bg/50">
        <div className="mx-auto max-w-365 px-2">
          <div className="flex flex-col sm:flex-row justify-between items-center py-header-top gap-2">
            <SocialIcons />
            <UtilityLinks />
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & NAVIGATION */}
      <div className="mx-auto px-2 max-w-365 relative">
        <div className="flex items-center justify-between py-2">
          {/* Logo Section  */}
          <div className="flex flex-col items-start shrink-0 relative">
            <Link href="/" className="flex items-center gap-3.5 group">
              <Image
                src={"/images/logo.png"}
                width={260}
                height={70}
                alt="Total Solutions IT Logo"
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
    </header>
  );
}
