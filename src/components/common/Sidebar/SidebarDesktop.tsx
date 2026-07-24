"use client";

import Image from "next/image";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "@remixicon/react";

import { categories } from "@/data/SidebarData";
import { SidebarProps } from "@/types/Sidebar";

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-40 bg-black/60 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />

      {/* Sidebar */}
      <aside
        spellCheck={false}
        className={`fixed top-0 left-0 z-50 h-screen w-[300px] bg-white transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Header */}
        <div
          onClick={closeSidebar}
          className="flex items-center gap-1 border-b border-[#eee] px-6 py-5 cursor-pointer"
        >
          <RiArrowLeftSLine size={28} />

          <h4 className="text-[16.56px] font-bold uppercase tracking-wide text-[#222]">
            Back
          </h4>
        </div>

        {/* Menu */}
        <ul className="py-[15px]">
          {categories.map((item) => (
            <li
              key={item.title}
              className="group relative flex items-center justify-between px-6 py-[13px] text-[14px]
               text-[#222] cursor-pointer hover:text-[#ec8951]"
            >
              <span>{item.title}</span>

              {item.columns && (
                <RiArrowRightSLine
                  size={18}
                  className="text-[#777] group-hover:text-[#ec8951]"
                />
              )}

              {item.columns && (
                <div
                  className={`absolute left-full top-0 hidden bg-white shadow-2xl border border-gray-100 z-50
                    ${item.type === "large"
                      ? "group-hover:grid grid-cols-[220px_220px_220px_220px] gap-10 w-[900px] p-10"
                      : "group-hover:block w-[260px] p-6"
                    }`}
                >
                  {/* Columns */}
                  {item.columns.map((column, columnIndex) => (
                    <div key={column.title || columnIndex}>

                      {column.title && (
                        <h3 className="relative mb-7 text-[18px] font-bold text-[#222]">
                          {column.title}
                          <span className="absolute left-0 -bottom-3 h-[2px] w-10 bg-[#ff4c3b]" />
                        </h3>
                      )}

                      {/* Links */}
                      <ul className="space-y-3">
                        {column.links.map((link) => (
                          <li
                            key={link.title}
                            className="relative text-[15px] text-[#333] hover:text-[#ff4c3b] 
                            after:absolute after:left-0 after:-bottom-0
                            after:h-[5px] after:w-0 after:bg-[rgba(255,76,59,0.3)] after:rounded-full
                            after:transition-all after:duration-300 hover:after:w-12 duration-200 cursor-pointer"
                          >
                            {link.title}
                          </li>
                        ))}
                      </ul>

                      {/* Nested Sections */}
                      {column.sections?.map((section) => (
                        <div key={section.title} className="mt-10">
                          {section.title && (
                            <h3 className="relative mb-7 text-[18px] font-bold text-[#222]">
                              {section.title}
                              <span className="absolute left-0 -bottom-3 h-[2px] w-10 bg-[#ff4c3b]" />
                            </h3>
                          )}

                          <ul className="space-y-3">
                            {section.links.map((link) => (
                              <li
                                key={link.title}
                                className="relative text-[15px] text-[#333] hover:text-[#ff4c3b] 
                                after:absolute after:left-0 after:-bottom-0
                                after:h-[5px] after:w-0 after:bg-[rgba(255,76,59,0.3)] after:rounded-full
                                after:transition-all after:duration-300 hover:after:w-12 duration-200 cursor-pointer"
                              >
                                {link.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}

                  {/* Banner */}
                  {item.image && (
                    <div className="flex justify-end">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={220}
                        height={380}
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;