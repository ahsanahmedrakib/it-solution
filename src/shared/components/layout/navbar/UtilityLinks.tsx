import Link from "next/link";
import { UTILITY_LINKS } from "@/shared/data/navbar";

export default function UtilityLinks() {
  return (
    <div className="flex gap-4 flex-wrap items-center">
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
  );
}
