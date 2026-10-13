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

  const baseStyles =
    "inline-flex items-center gap-1 text-[13px] font-semibold tracking-tight transition-all duration-150 px-3 py-1.5 rounded-full select-none cursor-pointer";
  const stateStyles =
    isActive || isActiveDropdown
      ? "bg-white text-primary-700 font-extrabold shadow-2xs"
      : "text-slate-600 hover:text-slate-950 hover:bg-white/70";

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hasDropdown ? (
        <button
          onClick={onClick}
          className={`${baseStyles} ${stateStyles}`}
          aria-expanded={isActiveDropdown}
          aria-haspopup="true"
        >
          <span>{item.label}</span>
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-200 ${
              isActiveDropdown ? "rotate-180 text-primary-600" : "text-slate-400"
            }`}
          />
        </button>
      ) : (
        <Link href={item.href} className={`${baseStyles} ${stateStyles}`}>
          {item.label}
        </Link>
      )}
    </div>
  );
}
