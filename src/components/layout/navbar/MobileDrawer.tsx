"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  CLOUD_MEGA_MENU,
  INTERNET_MEGA_MENU,
  IT_MEGA_MENU,
  MegaMenuData,
  NAV_ITEMS,
  VOICE_MEGA_MENU,
  WEB_MEGA_MENU,
} from "../../../data/navbarData";

const MEGA_MENU_DATA: Record<string, MegaMenuData> = {
  IT: IT_MEGA_MENU,
  VOICE: VOICE_MEGA_MENU,
  INTERNET: INTERNET_MEGA_MENU,
  CLOUD: CLOUD_MEGA_MENU,
  WEB: WEB_MEGA_MENU,
};

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [openMenuLabel, setOpenMenuLabel] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="lg:hidden bg-white border-t border-brand-subtle-border px-4 pt-3 pb-6 space-y-4 shadow-lg max-h-[85vh] overflow-y-auto">
      <div className="flex flex-col space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isOpen = openMenuLabel === item.label;
          const megaMenu = item.hasMegaMenu ? MEGA_MENU_DATA[item.label] : null;

          if (megaMenu) {
            return (
              <div key={item.label} className="border-b border-slate-100 pb-2">
                <button
                  onClick={() => setOpenMenuLabel(isOpen ? null : item.label)}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg text-brand-blue font-bold text-sm hover:bg-slate-50"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 stroke-[2.5]" />
                    <span>{item.label} Services</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mobile Mega Menu Accordion */}
                {isOpen && (
                  <div className="pl-4 pr-2 pt-2 space-y-4 bg-slate-50/50 rounded-lg p-3 mt-1 border border-brand-blue/20 grid sm:grid-cols-2 grid-cols-1">
                    {megaMenu.categories.map((category) => {
                      const CategoryIcon = category.icon;
                      return (
                        <div key={category.title} className="space-y-2">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-brand-blue font-bold text-sm border-b border-slate-200 pb-1">
                              {CategoryIcon ? (
                                <CategoryIcon className="w-4 h-4 stroke-[2.5]" />
                              ) : (
                                <div className="h-5 invisible">Empty</div>
                              )}
                              <span>{category.title}</span>
                            </div>
                            {category.description && (
                              <p className="text-[12px] w-75 leading-relaxed text-slate-500 font-normal">
                                {category.description}
                              </p>
                            )}
                          </div>
                          <div className="grid grid-cols-1 gap-1.5 pl-2">
                            {category.links.map((subLink) => {
                              const SubIcon = subLink.icon;
                              return (
                                <Link
                                  key={subLink.label}
                                  href={subLink.href}
                                  onClick={() => onClose()}
                                  className="flex gap-1 text-xs font-semibold text-brand-blue hover:text-brand-hover py-1"
                                >
                                  {subLink.image ? (
                                    <Image
                                      src={subLink.image}
                                      alt={subLink.label}
                                      width={20}
                                      height={20}
                                    />
                                  ) : SubIcon ? (
                                    <SubIcon className="w-4 h-4 stroke-2 shrink-0 text-brand-blue" />
                                  ) : null}
                                  <span>{subLink.label}</span>
                                </Link>
                              );
                            })}
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

