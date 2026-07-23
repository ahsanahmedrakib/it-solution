"use client";

import { useTouchHover } from "@/shared/hooks/useTouchHover";
import React from "react";

const HoverableContentCard = ({ children }: { children: React.ReactNode }) => {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`bg-white p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 transition-all relative ${
        touched
          ? "border-blue-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          : "border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      {children}
    </div>
  );
};

export default HoverableContentCard;
