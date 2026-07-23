"use client";

import { useEffect, useState } from "react";

export const useSalesToast = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const firstHide = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    const interval = setInterval(() => {
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 10000);
    }, 20000);

    return () => {
      clearTimeout(firstHide);
      clearInterval(interval);
    };
  }, []);

  const closeToast = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    closeToast,
  };
};