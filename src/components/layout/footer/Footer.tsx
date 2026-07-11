"use client";

import { ArrowUp, Home, Mail, MessageSquare, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-dark-bg text-white font-sans antialiased pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Logos & About */}
          <div className="space-y-6">
            {/* Logo Placeholders - Replace src with your actual logo paths */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center gap-3.5 group">
                  <Image
                    src={"/logo-white.svg"}
                    width={180}
                    height={70}
                    alt="Logo"
                    priority
                    className="object-contain"
                  />
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                {/* Mocking the Microsoft Partner logo */}
                <div className="grid grid-cols-2 gap-0.5 w-8 h-8">
                  <div className="bg-[#f25022]"></div>
                  <div className="bg-[#7fba00]"></div>
                  <div className="bg-[#00a4ef]"></div>
                  <div className="bg-[#ffb900]"></div>
                </div>
                <div className="leading-tight">
                  <span className="block text-lg font-bold">Microsoft</span>
                  <span className="block text-sm font-medium">
                    Solutions Partner
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[15px] leading-relaxed text-gray-200 pr-4">
              Bismillah Computer & Technology provides modern and secure digital
              workplaces, focusing on the B2B market with comprehensive services
              in Telecommunications, Internet, Cloud, IT Managed Services, and
              Cyber Security.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold mb-6">Navigation</h3>
            <ul className="space-y-3 list-disc pl-5 marker:text-gray-300 text-[15px] text-gray-200">
              <li>
                <Link
                  href="#phone-system"
                  className="hover:text-white transition-colors"
                >
                  Phone System
                </Link>
              </li>
              <li>
                <Link
                  href="#small-business"
                  className="hover:text-white transition-colors"
                >
                  Small Business
                </Link>
              </li>
              <li>
                <Link
                  href="#latest-news"
                  className="hover:text-white transition-colors"
                >
                  Latest News
                </Link>
              </li>
              <li>
                <Link
                  href="#case-studies"
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#contact-us"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#my-account"
                  className="hover:text-white transition-colors"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="hover:text-white transition-colors"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div className="lg:pl-4">
            <h3 className="text-2xl font-bold mb-6 leading-tight">
              Customer
              <br />
              Service
            </h3>
            <ul className="space-y-3 list-disc pl-5 marker:text-gray-300 text-[15px] text-gray-200">
              <li>
                <Link
                  href="#speed-test"
                  className="hover:text-white transition-colors"
                >
                  Speed test
                </Link>
              </li>
              <li>
                <Link
                  href="#direct-debit"
                  className="hover:text-white transition-colors"
                >
                  Direct Debit Form
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="hover:text-white transition-colors"
                >
                  {"FAQ's"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact</h3>
            <div className="space-y-6">
              {/* Email */}
              <div>
                <div className="flex items-center space-x-2 font-bold mb-1 uppercase tracking-wide text-[13px]">
                  <Mail className="w-4 h-4" strokeWidth={2.5} />
                  <span>Email</span>
                </div>
                <a
                  href="mailto:support@tsit.au"
                  className="text-[15px] text-gray-200 hover:text-white transition-colors"
                >
                  support@tsit.au
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center space-x-2 font-bold mb-1 uppercase tracking-wide text-[13px]">
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  <span>Phone</span>
                </div>
                <a
                  href="tel:0260614222"
                  className="text-[15px] text-gray-200 hover:text-white transition-colors"
                >
                  (02) 6061 4222
                </a>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center space-x-2 font-bold mb-1 uppercase tracking-wide text-[13px]">
                  <Home className="w-4 h-4" strokeWidth={2.5} />
                  <span>Address</span>
                </div>
                <address className="text-[15px] text-gray-200 not-italic leading-relaxed">
                  Rd No 6/A,
                  <br />
                  Dhaka 1230
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[13px] text-gray-300 gap-4">
          <p>© Bismillah Computer & Technology // Powered by reCAPTCHA 2026</p>
          <Link
            href="#privacy-policy"
            className="hover:text-white transition-colors font-medium"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Floating Action Buttons (Right Aligned) */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50">
        <button
          onClick={scrollToTop}
          className="bg-brand-secondary cursor-pointer p-2 rounded-full transition-colors group focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} strokeWidth={4} className="text-white" />
        </button>

        <button
          className="bg-brand-secondary  text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 focus:outline-none"
          aria-label="Open chat"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </button>
      </div>
    </footer>
  );
}
