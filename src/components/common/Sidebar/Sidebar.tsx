"use client";

import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

type SidebarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
};

const categories = [
  "Clothing",
  "Bags",
  "Footwear",
  "Watches",
  "Accessories",
  "House Of Design",
  "Beauty & Personal Care",
  "Home & Decor",
  "Kitchen",
];

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-40 bg-black/60 transition-all duration-300
        ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[300px] bg-white transition-transform duration-300
        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Header */}

        <div
          onClick={closeSidebar}
          className="flex items-center gap-1 border-b border-[#eee] px-6 py-8 cursor-pointer"
        >
          <RiArrowLeftSLine size={22} />

          <h4 className="text-[18px] font-semibold uppercase tracking-wide">
            Back
          </h4>
        </div>

        {/* Menu */}

        <ul className="py-4">
          {categories.map((item) => (
            <li
              key={item}
              className="flex items-center justify-between px-6 py-[13px] text-[17px] text-[#222] cursor-pointer hover:text-[#ff4c3b] transition-all duration-300"
            >
              <span>{item}</span>

              <RiArrowRightSLine size={18} />
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;