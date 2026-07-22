"use client";

import React from "react";
import { RiTruckLine } from "@remixicon/react";

interface ShippingProgressBarProps {
    neededAmount: number;
    progressPercentage: number;
}

export const ShippingProgressBar: React.FC<ShippingProgressBarProps> = ({
    neededAmount,
    progressPercentage,
}) => {
    return (
        <div className="p-4 border-b border-gray-100 bg-[#fafafa] rounded-t-md">
            <p className="text-xs text-center text-gray-500 mb-2">
                Spend <span className="font-semibold text-gray-700">${neededAmount}</span> More And Enjoy{" "}
                <span className="font-semibold text-gray-700">Free Shipping!</span>
            </p>
            <div className="relative w-full h-1.5 bg-gray-200 rounded-full">
                <div
                    className="h-full bg-[#ec8951] rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                />
                <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#ec8951] text-white 
          rounded-full p-1 shadow"
                    style={{ left: `${progressPercentage}%` }}
                >
                    <RiTruckLine size={12} />
                </div>
            </div>
        </div>
    );
};