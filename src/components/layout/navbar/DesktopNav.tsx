"use client";

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

export default function DesktopNav() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-4 2xl:gap-6">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isHovered = hoveredMenu === item.label;
        const megaMenu = item.hasMegaMenu ? MEGA_MENU_DATA[item.label] : null;

        return (
          <div
            key={item.label}
            className="relative py-4"
            onMouseEnter={() => item.hasMegaMenu && setHoveredMenu(item.label)}
            onMouseLeave={() => item.hasMegaMenu && setHoveredMenu(null)}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-1.5 text-nav-item font-nav text-brand-blue hover:text-brand-hover transition-colors duration-150 ${
                isHovered
                  ? "text-brand-hover underline decoration-2 underline-offset-4"
                  : ""
              }`}
            >
              <Icon className="w-4 h-4 stroke-[2.5]" />
              <span>{item.label}</span>
            </Link>

            {/* Desktop Mega Menu Overlay */}
            {megaMenu && isHovered && (
              <div
                className="absolute top-full w-300 2xl:w-325 z-50 pt-2 transition-all duration-200 animate-in fade-in-50 slide-in-from-top-2"
                style={{ left: "50%", transform: "translateX(-50%)" }}
              >
                <div
                  className={`bg-white border-2 border-brand-blue rounded-[20px] shadow-2xl p-8 grid ${hoveredMenu === "WEB" ? "grid-cols-5" : "grid-cols-4"} gap-8`}
                >
                  {megaMenu.categories.map((category) => {
                    const CategoryIcon = category.icon;
                    return (
                      <div
                        key={category.title}
                        className="flex flex-col space-y-4"
                      >
                        {/* Category Header */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-brand-blue">
                            {CategoryIcon ? (
                              <CategoryIcon className="w-5 h-5 stroke-[2.5]" />
                            ) : (
                              <div className="h-6 invisible">Empty</div>
                            )}
                            <h3 className="font-bold text-base tracking-tight text-brand-blue">
                              {category.title}
                            </h3>
                          </div>
                          {category.description && (
                            <p className="text-[12px] leading-relaxed text-slate-500 font-normal">
                              {category.description}
                            </p>
                          )}
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
  );
}

