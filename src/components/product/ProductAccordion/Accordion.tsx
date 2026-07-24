"use client";

import React, { useState } from "react";
import { RiArrowDownSLine } from "@remixicon/react";
import clsx from "clsx";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className=" mb-5 mt-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full h-12 px-5 bg-[#f8f8f8] flex items-center justify-between border border-[#ddd]"
      >
        <h3 className="text-[16px] font-medium text-[rgb(35,35,35)]">
          {title}
        </h3>

        <RiArrowDownSLine
          size={24}
          className={clsx(
            "transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={clsx(
          "grid transition-all duration-300 ease-in-out border-none",
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-3 py-2 text-[14px] leading-7">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}