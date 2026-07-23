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
        <div className="font-libre-baskerville p-4 bg-[#fafafa]">
            <p className="text-sm text-[#777] mb-[6px]">
                Spend ${neededAmount} More And Enjoy Free Shipping!
            </p>
            <div className="relative w-full h-1.5 bg-[#e6e7e9]">
                <div
                    className="h-full bg-[#ec8951] transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                />
                <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#ec8951] text-white 
          rounded-full p-1"
                    style={{ left: `${progressPercentage}%` }}
                >
                    <RiTruckLine size={12} />
                </div>
            </div>
        </div>
    );
};