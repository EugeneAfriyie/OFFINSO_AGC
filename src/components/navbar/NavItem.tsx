"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NavLinkItem } from "./NavLinks";

interface NavItemProps {
  item: NavLinkItem;
  isActiveDropdown: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export function NavItem({
  item,
  isActiveDropdown,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
  const hasDropdown = Boolean(item.dropdownType);

  return (
    <div
      className="relative flex items-center py-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hasDropdown ? (
        <button
          onClick={onClick}
          className={`flex items-center gap-1.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg px-2.5 py-1 ${
            isActiveDropdown || isActive ? "text-primary-600 font-extrabold" : "text-slate-700 hover:text-primary-600"
          }`}
          aria-expanded={isActiveDropdown}
          aria-haspopup="true"
        >
          <span>{item.label}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isActiveDropdown ? "rotate-180 text-primary-600" : "text-slate-400"
            }`}
          />
        </button>
      ) : (
        <Link
          href={item.href}
          className={`text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg px-2.5 py-1 ${
            isActive ? "text-primary-600 font-extrabold" : "text-slate-700 hover:text-primary-600"
          }`}
        >
          {item.label}
        </Link>
      )}

      {/* Active Underline Indicator */}
      {isActive && (
        <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-primary-600 rounded-full" />
      )}
    </div>
  );
}
