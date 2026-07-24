"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiAddLine, RiSubtractLine, RiCloseFill } from "@remixicon/react";
import { navLinks, NavLink } from "@/data/navLinks"; 

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Dark Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/60 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-[280px] bg-white transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div
          onClick={closeMenu}
          className="flex items-center justify-between shadow-xs border-gray-100 px-5 py-6 cursor-pointer sticky top-0 bg-white z-20"
        >
          <div className="flex items-center justify-between w-full">
            <h4 className="text-[18px] font-bold uppercase tracking-wider text-[#ec8951]">
              Menu
            </h4>
            <span className="p-3">
              <RiCloseFill size={18} />
            </span>
          </div>
        </div>

        {/* Links Navigation */}
        <div className="py-2">
          {navLinks.map((item: NavLink) => {
            const hasSubmenu = Boolean(item.megaMenu || item.dropdown);
            const isMenuOpen = openMenuId === item.id;

            return (
              <div key={item.id} className="border-b border-gray-50 last:border-none">
                {/* Main Item Row */}
                <div
                  onClick={() => {
                    if (hasSubmenu) {
                      toggleMenu(item.id);
                    } else {
                      closeMenu();
                    }
                  }}
                  className={`flex items-center justify-between px-6 py-3.5 text-[15px] font-medium transition-colors cursor-pointer ${
                    isMenuOpen ? "text-[#ec8951]" : "text-[#222222] hover:text-[#ec8951]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.href && !hasSubmenu ? (
                      <Link href={item.href} className="capitalize">
                        {item.title}
                      </Link>
                    ) : (
                      <span className="capitalize">{item.title}</span>
                    )}

                    {item.badge && (
                      <span className="bg-[#ec8951] text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {hasSubmenu && (
                    <span>
                      {isMenuOpen ? (
                        <RiSubtractLine size={16} className="text-[#ec8951]" />
                      ) : (
                        <RiAddLine size={16} className="text-[#777]" />
                      )}
                    </span>
                  )}
                </div>

                {/* Submenu Dropdown Body */}
                {hasSubmenu && isMenuOpen && (
                  <div className="bg-[#f9f9f9] px-6 py-3 space-y-4">
                    {/* MegaMenu Type */}
                    {item.megaMenu &&
                      item.megaMenu.map((sec) => (
                        <div key={sec.id} className="space-y-2">
                          <h5 className="text-[13px] font-bold text-[#444] capitalize pt-1">
                            {sec.title}
                          </h5>
                          <ul className="space-y-2 pl-1">
                            {sec.links.map((link) => (
                              <li key={link.id}>
                                <Link
                                  href={link.href || "#"}
                                  onClick={closeMenu}
                                  className="text-[13px] text-[#666] hover:text-[#ec8951] flex items-center gap-2 transition-colors"
                                >
                                  <span className="text-gray-400 font-light">-</span>
                                  <span>{link.title}</span>
                                  {link.badge && (
                                    <span className="bg-[#ec8951] text-white text-[9px] font-bold px-1 rounded uppercase">
                                      {link.badge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    {/* Normal Dropdown Type */}
                    {item.dropdown && (
                      <ul className="space-y-2.5 pl-1">
                        {item.dropdown.map((dropLink) => (
                          <li key={dropLink.id}>
                            <Link
                              href={dropLink.href || "#"}
                              onClick={closeMenu}
                              className="text-[13px] text-[#666] hover:text-[#ec8951] flex items-center gap-2 transition-colors"
                            >
                              <span className="text-gray-400 font-light">-</span>
                              <span>{dropLink.title}</span>
                              {dropLink.badge && (
                                <span className="bg-[#ec8951] text-white text-[9px] font-bold px-1 rounded uppercase">
                                  {dropLink.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;