"use client";

import {
  CLOUD_MEGA_MENU,
  INDUSTRIES_MEGA_MENU,
  INTERNET_MEGA_MENU,
  IT_MEGA_MENU,
  MegaMenuData,
  NAV_ITEMS,
  VOICE_MEGA_MENU,
  WEB_MEGA_MENU,
} from "@/shared/data/navbar";
import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const MEGA_MENU_DATA: Record<string, MegaMenuData> = {
  IT: IT_MEGA_MENU,
  VOICE: VOICE_MEGA_MENU,
  INTERNET: INTERNET_MEGA_MENU,
  CLOUD: CLOUD_MEGA_MENU,
  WEB: WEB_MEGA_MENU,
  INDUSTRIES: INDUSTRIES_MEGA_MENU,
};

export default function DesktopNav() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const megaMenu = hoveredMenu ? MEGA_MENU_DATA[hoveredMenu] : null;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [menuTop, setMenuTop] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY === 0);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setHoveredMenu(null), 150);
  }, [clearCloseTimer]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, [clearCloseTimer]);

  const handleNavEnter = (label: string, hasMegaMenu: boolean) => {
    if (!hasMegaMenu) return;
    clearCloseTimer();
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setMenuTop(rect.bottom);
    }
    setHoveredMenu(label);
  };

  useLayoutEffect(() => {
    if (!megaMenu) return;
    const updatePosition = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        setMenuTop(rect.bottom);
      }
    };
    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition, { passive: true });
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [megaMenu]);

  return (
    <div ref={wrapperRef}>
      <nav
        // ref={wrapperRef}
        className="hidden lg:flex items-center gap-4 2xl:gap-6"
        onMouseLeave={scheduleClose}
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isHovered = hoveredMenu === item.label;

          return (
            <Link
              href={item.href}
              key={item.label}
              className={`py-2 cursor-pointer text-brand-blue hover:text-brand-hover transition-colors duration-150 ${
                isHovered
                  ? "text-brand-hover underline decoration-2 underline-offset-4"
                  : ""
              }`}
              onMouseEnter={() =>
                handleNavEnter(item.label, !!item.hasMegaMenu)
              }
            >
              <span
                className={`flex items-center gap-1.5 text-nav-item font-nav`}
              >
                <Icon className="w-4 h-4 stroke-[2.5]" />
                <span>{item.label}</span>
              </span>
            </Link>
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

      {/* Single Mega Menu Dropdown — centered on viewport */}
      {megaMenu && (
        <div
          className={`fixed left-1/2 -translate-x-1/2 w-full px-10 z-50 pt-3 animate-in fade-in-50 slide-in-from-top-2 ${isTop ? "-mt-8" : null}`}
          style={{ top: menuTop }}
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
        >
          <div
            className={`bg-white border-2 border-brand-blue rounded-[20px] shadow-2xl p-8 grid ${hoveredMenu === "WEB" ? "grid-cols-5" : hoveredMenu === "CONTACT" ? "grid-cols-1" : "grid-cols-4"} gap-8`}
          >
            {megaMenu.categories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.title} className="flex flex-col space-y-4">
                  {/* Category Header */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-brand-blue">
                      {CategoryIcon ? (
                        <CategoryIcon className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <div className="h-6 invisible">Empty</div>
                      )}
                      {category.href ? (
                        <Link
                          href={category.href}
                          className="border-b-2 border-white hover:border-brand-blue"
                        >
                          <h3 className="font-bold text-base tracking-tight text-brand-blue">
                            {category.title}
                          </h3>
                        </Link>
                      ) : (
                        <h3 className="font-bold text-base tracking-tight text-brand-blue">
                          {category.title}
                        </h3>
                      )}
                    </div>
                    {category.description && (
                      <p className="text-[14px] leading-relaxed text-slate-500 font-normal">
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
                          {subLink?.href ? (
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
                          ) : (
                            <div className="flex items-center gap-2 text-[13px] font-semibold text-brand-blue hover:text-brand-hover hover:translate-x-1 transition-all duration-150">
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
                            </div>
                          )}
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
}

