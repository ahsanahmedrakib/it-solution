"use client";

import {
  AtSign,
  BookOpen,
  Cloud,
  Code,
  Info,
  Landmark,
  Mail,
  Menu,
  Network,
  Phone,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Social icons on top
const SOCIAL_ICONS = [
  { href: "https://www.facebook.com", icon: FaFacebookF, color: "#1877F2" },
  { href: "https://www.twitter.com", icon: FaXTwitter, color: "#000000" },
  {
    href: "https://www.linkedin.com",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },
  {
    href: "https://www.instagram.com",
    icon: FaInstagram,
    color: "#E4405F",
  },
];

// Top Utility links matching image_82d63e.png
const UTILITY_LINKS = [
  { label: "CUSTOMER PORTAL", href: "/portal", icon: User },
  { label: "SUCCESS CENTRE", href: "/success-centre", icon: BookOpen },
  { label: "STATUS", href: "/status", icon: Info },
];

// Main navigation items with corresponding icons from image_82d63e.png
const NAV_ITEMS = [
  { label: "IT", href: "/it", icon: Network },
  { label: "VOICE", href: "/voice", icon: Phone },
  { label: "INTERNET", href: "/internet", icon: AtSign },
  { label: "CLOUD", href: "/cloud", icon: Cloud },
  { label: "WEB", href: "/web", icon: Code },
  { label: "INDUSTRIES", href: "/industries", icon: Landmark },
  { label: "CONTACT", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-brand-subtle-border font-sans selection:bg-brand-blue selection:text-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="w-full border-b border-slate-100 bg-brand-light-bg/50">
        <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-header-top gap-2 ">
            <div className="flex items-center -mt-2">
              {SOCIAL_ICONS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 p-2`}
                    style={{ backgroundColor: item.color }}
                    target="_blank"
                  >
                    <Icon color={"#FFF"} size={18} />
                  </Link>
                );
              })}
            </div>
            <div className="flex gap-2 items-center">
              {UTILITY_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-1.5 text-utility font-utility text-brand-blue hover:text-brand-hover transition-colors duration-150"
                  >
                    <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & NAVIGATION */}
      <div className="mx-auto px-2 max-w-365">
        <div className="flex items-center justify-between">
          {/* Logo Section matching image_82d63e.png */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            {/* Custom SVG Shell/Wave Logo Mark */}
            <Image
              src={"/images/logo.png"}
              width={300}
              height={100}
              alt="brand logo"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 text-nav-item font-nav text-brand-blue hover:text-brand-hover transition-colors duration-150"
                >
                  <Icon className="w-4 h-4 stroke-[2.5]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}{" "}
            {/* Phone Pill Button Tokenized */}
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href="tel:0260614222"
                className="bg-brand-blue hover:bg-brand-hover active:bg-brand-active text-white px-pill-px py-pill-py rounded-pill text-phone shadow-pill-glow transition-all duration-200 hover:shadow-md inline-flex items-center gap-1"
              >
                <span className="font-normal">(02)</span>
                <span className="font-extrabold">6061 4222</span>
              </a>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="xl:hidden flex items-center gap-3">
            <a
              href="tel:0260614222"
              className="lg:hidden bg-brand-blue text-white px-3.5 py-1.5 rounded-pill text-xs font-bold"
            >
              (02) 6061 4222
            </a>

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

      {/* 3. MOBILE RESPONSIVE DRAWER */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-brand-subtle-border px-4 pt-3 pb-6 space-y-4 shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-lg text-brand-blue font-bold text-xs hover:bg-slate-50 transition-colors"
                >
                  <Icon className="w-4 h-4 stroke-[2.5]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="border-t border-brand-subtleBorder pt-3 flex flex-wrap gap-4 justify-between">
            {UTILITY_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-1.5 text-utility font-utility text-brand-blue hover:text-brand-hover"
                >
                  <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
