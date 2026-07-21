"use client";

import { useState } from "react";

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);

  const closeSidebar = () => setIsOpen(false);

  return {
    isOpen,
    openSidebar,
    closeSidebar,
  };
};

export default useSidebar;