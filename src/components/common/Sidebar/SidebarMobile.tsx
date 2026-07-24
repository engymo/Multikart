"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  RiArrowLeftSLine,
  RiAddLine,
  RiSubtractLine,
} from "@remixicon/react";

import { categories } from "@/data/SidebarData";
import { SidebarProps } from "@/types/Sidebar";

const SidebarMobile = ({ isOpen, closeSidebar }: SidebarProps) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (title: string) => {
    setOpenCategory((prev) => (prev === title ? null : title));
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-40 bg-black/60 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />

      {/* Mobile Sidebar */}
      <aside
        spellCheck={false}
        className={`fixed top-0 left-0 z-50 h-screen w-[280px] bg-white transition-transform
           duration-300 overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Header */}
        <div
          onClick={closeSidebar}
          className="flex items-center gap-2 px-5 py-4 cursor-pointer
           sticky top-0 bg-white z-20"
        >
          <RiArrowLeftSLine size={24} className="text-[#333]" />
          <h4 className="text-[15px] font-bold uppercase tracking-wider text-[#222]">
            BACK
          </h4>
        </div>

        {/* Menu List */}
        <ul className="divide-y divide-gray-100">
          {categories.map((item) => {
            const isOpen = openCategory === item.title;

            return (
              <li key={item.title} className="flex flex-col">
                {/* Category Header Item */}
                <div
                  onClick={() => item.columns && toggleCategory(item.title)}
                  className={`flex items-center justify-between px-6 py-3.5 text-[14px] 
                    font-medium transition-colors cursor-pointer ${isOpen ? "text-[#ec8951]" : "text-[#333]"
                    }`}
                >
                  <span>{item.title}</span>

                  {item.columns && (
                    <span>
                      {isOpen ? (
                        <RiSubtractLine size={16} className="text-[#ec8951]" />
                      ) : (
                        <RiAddLine size={16} className="text-[#777]" />
                      )}
                    </span>
                  )}
                </div>

                {/* Submenu Content (Accordian Dropdown) */}
                {item.columns && isOpen && (
                  <div className="bg-[#fafafa] px-6 py-3 space-y-5 ">
                    {item.columns.map((column, colIdx) => (
                      <div key={column.title || colIdx} className="space-y-3">

                        {/* Column Title */}
                        {column.title && (
                          <h5 className="text-[13px] font-bold text-[#444] pt-1">
                            {column.title}
                          </h5>
                        )}

                        {/* Column Links */}
                        <ul className="space-y-2.5 pl-1">
                          {column.links.map((link) => (
                            <li
                              key={link.title}
                              className="text-[13px] text-[#666] hover:text-[#ec8951] 
                              cursor-pointer flex items-center gap-1.5"
                            >
                              <span className="text-gray-400 font-light">-</span>
                              <span>{link.title}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Column Sections (Nested) */}
                        {column.sections?.map((section) => (
                          <div key={section.title} className="pt-3 space-y-2.5">
                            {section.title && (
                              <h5 className="text-[13px] font-bold text-[#444]">
                                {section.title}
                              </h5>
                            )}

                            <ul className="space-y-2.5 pl-1">
                              {section.links.map((link) => (
                                <li
                                  key={link.title}
                                  className="text-[13px] text-[#666] hover:text-[#ec8951] cursor-pointer flex items-center gap-1.5"
                                >
                                  <span className="text-gray-400 font-light">-</span>
                                  <span>{link.title}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}

                    {item.image && (
                      <div className="pt-3 pb-2 flex justify-center">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={220}
                          height={300}
                          className="w-full h-auto object-cover rounded-sm shadow-sm"
                        />
                      </div>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default SidebarMobile;