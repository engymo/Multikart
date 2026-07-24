"use client";

import React from 'react';
import { RiArrowUpDoubleFill } from '@remixicon/react';
import { useScroll } from '@/hooks/useScroll'; 

const FixedBarButton = () => {
  const showScrollBtn = useScroll(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-80 flex items-center gap-2">
      <a
        href="#"
        className="bg-[#ec8951] text-white text-sm px-5 py-3 hover:bg-transparent hover:text-black transition-colors duration-300 block"
      >
        Buy @ 30% OFF
      </a>

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`bg-[#ec8951] text-white p-3 flex items-center justify-center transition-all duration-300 ${
          showScrollBtn
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-4"
        }`}
      >
        <RiArrowUpDoubleFill size={20} />
      </button>
    </div>
  );
};

export default FixedBarButton;