"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { IT_MEGA_MENU, NAV_ITEMS } from "../../../data/navbarData";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [mobileItOpen, setMobileItOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="xl:hidden bg-white border-t border-brand-subtle-border px-4 pt-3 pb-6 space-y-4 shadow-lg max-h-[85vh] overflow-y-auto">
      <div className="flex flex-col space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isIT = item.hasMegaMenu;

          if (isIT) {
            return (
              <div key={item.label} className="border-b border-slate-100 pb-2">
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
                                onClick={() => onClose()}
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
              onClick={() => onClose()}
              className="flex items-center gap-2 p-2.5 rounded-lg text-brand-blue font-bold text-sm hover:bg-slate-50 transition-colors"
            >
              <Icon className="w-4 h-4 stroke-[2.5]" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center shrink-0 ml-2">
        <a
          href="tel:0260614222"
          className="bg-brand-blue hover:bg-brand-hover active:bg-brand-active text-white px-pill-px py-pill-py rounded-pill text-phone shadow-pill-glow transition-all duration-200 hover:shadow-md inline-flex items-center gap-1"
        >
          <span className="font-normal">(02)</span>
          <span className="font-extrabold">6061 4222</span>
        </a>
      </div>
    </div>
  );
}

