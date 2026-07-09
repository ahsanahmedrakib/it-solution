"use client";

import {
  Activity,
  AtSign,
  BookOpen,
  Box,
  Briefcase,
  Bug,
  CheckCircle,
  ChevronDown,
  Cloud,
  Code,
  Cpu,
  Database,
  FileCheck,
  Globe,
  HardDrive,
  Headphones,
  HelpCircle,
  Info,
  KeyRound,
  Landmark,
  Laptop,
  Lock,
  Mail,
  Menu,
  Monitor,
  Network,
  Phone,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  User,
  Users,
  Wifi,
  Wrench,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Social icons
const SOCIAL_ICONS = [
  { href: "https://www.facebook.com", icon: FaFacebookF, color: "#1877F2" },
  { href: "https://www.twitter.com", icon: FaXTwitter, color: "#000000" },
  { href: "https://www.linkedin.com", icon: FaLinkedinIn, color: "#0A66C2" },
  { href: "https://www.instagram.com", icon: FaInstagram, color: "#E4405F" },
];

// Top Utility links
const UTILITY_LINKS = [
  { label: "CUSTOMER PORTAL", href: "/portal", icon: User },
  { label: "SUCCESS CENTRE", href: "/success-centre", icon: BookOpen },
  { label: "STATUS", href: "/status", icon: Info },
];

// IT Mega Menu Data matched exactly from image_90ea07.jpg
const IT_MEGA_MENU = {
  categories: [
    {
      title: "Cyber Security",
      icon: Lock,
      description:
        "Advanced Endpoint security, email security, Australian Cyber Security Centre (ASCS) standards and recommendations.",
      links: [
        {
          label: "Cloud & Network Security",
          href: "/cyber-security/cloud",
          icon: ShieldCheck,
        },
        {
          label: "EndPoint Security",
          href: "/cyber-security/endpoint",
          icon: Monitor,
        },
        {
          label: "Essential Eight",
          href: "/cyber-security/essential-eight",
          icon: Shield,
        },
        {
          label: "Incident Response",
          href: "/cyber-security/incident-response",
          icon: FileCheck,
        },
        {
          label: "Security Awareness Training",
          href: "/cyber-security/training",
          icon: Users,
        },
        {
          label: "Zero Trust Framework",
          href: "/cyber-security/zero-trust",
          icon: CheckCircle,
        },
      ],
    },
    {
      title: "Servers + Networking",
      icon: Database,
      description:
        "Network and server infrastructure deployment, configuration and management.",
      links: [
        {
          label: "Network Consulting and Design",
          href: "/networking/consulting",
          icon: Cpu,
        },
        {
          label: "Network Installation",
          href: "/networking/installation",
          icon: Globe,
        },
        { label: "Wi-Fi Networking", href: "/networking/wifi", icon: Wifi },
        {
          label: "Network Security",
          href: "/networking/security",
          icon: ShieldAlert,
        },
        { label: "VPN Solutions", href: "/networking/vpn", icon: KeyRound },
        {
          label: "Windows Server",
          href: "/networking/windows-server",
          icon: Server,
        },
      ],
    },
    {
      title: "Managed IT",
      icon: Box,
      description:
        "Maintaining and enhancing an organisation's IT Infrastructure.",
      links: [
        {
          label: "Managed IT Services",
          href: "/managed-it/services",
          icon: Headphones,
        },
        {
          label: "Procurement",
          href: "/managed-it/procurement",
          icon: ShoppingBag,
        },
        {
          label: "Help Desk Support",
          href: "/managed-it/help-desk",
          icon: HelpCircle,
        },
        {
          label: "Data Management",
          href: "/managed-it/data-management",
          icon: HardDrive,
        },
        {
          label: "IT Consulting",
          href: "/managed-it/consulting",
          icon: Laptop,
        },
        {
          label: "IT Outsourcing",
          href: "/managed-it/outsourcing",
          icon: Briefcase,
        },
      ],
    },
    {
      title: "Device Repair",
      icon: Monitor,
      description:
        "Repairs for Laptop's, Desktop, Tablets, Mobile Phones and more.",
      links: [
        {
          label: "Virus/Malware Removal",
          href: "/device-repair/virus-removal",
          icon: Bug,
        },
        {
          label: "Data Recovery",
          href: "/device-repair/data-recovery",
          icon: Activity,
        },
        { label: "Upgrades", href: "/device-repair/upgrades", icon: Wrench },
        {
          label: "PC & Laptop Repairs",
          href: "/device-repair/pc-repairs",
          icon: Monitor,
        },
      ],
    },
  ],
};

// Main Navigation Items
const NAV_ITEMS = [
  { label: "IT", href: "/it", icon: Network, hasMegaMenu: true },
  { label: "VOICE", href: "/voice", icon: Phone },
  { label: "INTERNET", href: "/internet", icon: AtSign },
  { label: "CLOUD", href: "/cloud", icon: Cloud },
  { label: "WEB", href: "/web", icon: Code },
  { label: "INDUSTRIES", href: "/industries", icon: Landmark },
  { label: "CONTACT", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isItHovered, setIsItHovered] = useState(false);
  const [mobileItOpen, setMobileItOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-brand-subtle-border font-sans selection:bg-brand-blue selection:text-white relative">
      {/* 1. TOP UTILITY BAR */}
      <div className="w-full border-b border-slate-100 bg-brand-light-bg/50">
        <div className="mx-auto max-w-345 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-header-top gap-2">
            {/* Social Icons */}
            <div className="flex items-center -mt-2">
              {SOCIAL_ICONS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-center p-2 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: item.color }}
                    target="_blank"
                  >
                    <Icon color={"#FFF"} size={16} />
                  </Link>
                );
              })}
            </div>

            {/* Utility Links */}
            <div className="flex gap-4 sm:gap-6 items-center">
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
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-345 relative">
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

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isIT = item.hasMegaMenu;

              return (
                <div
                  key={item.label}
                  className="relative py-4"
                  onMouseEnter={() => isIT && setIsItHovered(true)}
                  onMouseLeave={() => isIT && setIsItHovered(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 text-nav-item font-nav text-brand-blue hover:text-brand-hover transition-colors duration-150 ${
                      isIT && isItHovered
                        ? "text-brand-hover underline decoration-2 underline-offset-4"
                        : ""
                    }`}
                  >
                    <Icon className="w-4 h-4 stroke-[2.5]" />
                    <span>{item.label}</span>
                  </Link>

                  {/* Desktop Mega Menu Overlay (Triggered on hovering 'IT') */}
                  {isIT && isItHovered && (
                    <div className="absolute top-full -left-112.5 2xl:-left-130 w-300 2xl:w-325 z-50 pt-2 transition-all duration-200 animate-in fade-in-50 slide-in-from-top-2">
                      <div className="bg-white border-2 border-brand-blue rounded-[20px] shadow-2xl p-8 grid grid-cols-4 gap-8">
                        {IT_MEGA_MENU.categories.map((category) => {
                          const CategoryIcon = category.icon;
                          return (
                            <div
                              key={category.title}
                              className="flex flex-col space-y-4"
                            >
                              {/* Category Header */}
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-brand-blue">
                                  <CategoryIcon className="w-5 h-5 stroke-[2.5]" />
                                  <h3 className="font-bold text-base tracking-tight text-brand-blue">
                                    {category.title}
                                  </h3>
                                </div>
                                <p className="text-[12px] leading-relaxed text-slate-500 font-normal">
                                  {category.description}
                                </p>
                              </div>

                              {/* Category Sub-links */}
                              <ul className="space-y-3 pt-2 border-t border-slate-100">
                                {category.links.map((subLink) => {
                                  const SubIcon = subLink.icon;
                                  return (
                                    <li key={subLink.label}>
                                      <Link
                                        href={subLink.href}
                                        className="flex items-center gap-2 text-[13px] font-semibold text-brand-blue hover:text-brand-hover hover:translate-x-1 transition-all duration-150"
                                      >
                                        <SubIcon className="w-4 h-4 stroke-2 shrink-0 text-brand-blue" />
                                        <span>{subLink.label}</span>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Phone Pill Button */}
            <div className="hidden lg:flex items-center shrink-0 ml-2">
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

      {/* 3. MOBILE RESPONSIVE DRAWER & ACCORDIONS */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-brand-subtle-border px-4 pt-3 pb-6 space-y-4 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isIT = item.hasMegaMenu;

              if (isIT) {
                return (
                  <div
                    key={item.label}
                    className="border-b border-slate-100 pb-2"
                  >
                    <button
                      onClick={() => setMobileItOpen(!mobileItOpen)}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg text-brand-blue font-bold text-sm hover:bg-slate-50"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 stroke-[2.5]" />
                        <span>{item.label} Services</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileItOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Mobile IT Mega Menu Accordion */}
                    {mobileItOpen && (
                      <div className="pl-4 pr-2 pt-2 space-y-4 bg-slate-50/50 rounded-lg p-3 mt-1 border border-brand-blue/20">
                        {IT_MEGA_MENU.categories.map((category) => {
                          const CategoryIcon = category.icon;
                          return (
                            <div key={category.title} className="space-y-2">
                              <div className="flex items-center gap-2 text-brand-blue font-bold text-xs border-b border-slate-200 pb-1">
                                <CategoryIcon className="w-4 h-4 stroke-[2.5]" />
                                <span>{category.title}</span>
                              </div>
                              <div className="grid grid-cols-1 gap-1.5 pl-2">
                                {category.links.map((subLink) => (
                                  <Link
                                    key={subLink.label}
                                    href={subLink.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-xs font-semibold text-brand-blue hover:text-brand-hover py-1"
                                  >
                                    • {subLink.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-lg text-brand-blue font-bold text-sm hover:bg-slate-50 transition-colors"
                >
                  <Icon className="w-4 h-4 stroke-[2.5]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Utility Items */}
          <div className="border-t border-brand-subtle-border pt-3 flex flex-wrap gap-4 justify-between">
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
