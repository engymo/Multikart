"use client";

import React from "react";
import { RiPencilLine, RiDeleteBinLine, RiAddLine, RiSubtractLine } from "@remixicon/react";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartItemRowProps {
    item: CartItem;
    index: number;

    onUpdateQuantity: (id: number, delta: number) => void;
    onRemove: (id: number) => void;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({
    item,
    index,
    onUpdateQuantity,
    onRemove,
}) => {
    return (
        <div className="font-lato py-3 flex justify-between ">

            <div className="flex items-start gap-1">
                <div>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-[78.75px] h-[78.75px] object-cover px-1 bg-gray-50 "
                    />
                </div>
                <div>
                    <h3 className="text-sm lg:text-[16px] font-semibold text-gray-800 truncate">{item.name}</h3>
                    <p className="text-sm lg:text-[16px] text-gray-500 mt-0.5">
                        {item.quantity} X ${item.price.toFixed(2)}
                    </p>
                </div>
            </div>
            {/* Edit&Delete */}
            
            <div className="flex flex-col justify-end items-end">
                <div className="flex gap-1 text-[#222]">
                    {index === 0 && (
                        <button className="border border-gray-200 bg-gray-50 p-2">
                            <RiPencilLine size={14} />
                        </button>
                    )}

                    <button
                        onClick={() => onRemove(item.id)}
                        className="border border-gray-200 bg-gray-50 p-2"
                    >
                        <RiDeleteBinLine size={14} />
                    </button>
                </div>

                {/* Counter */}
                <div className="font-lato flex items-center mt-2 border border-gray-200 w-max bg-gray-50">
                    <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-3 py-3"
                    >
                        <RiSubtractLine size={12} />
                    </button>
                    <span className="px-2 text-xs font-medium text-gray-700">{item.quantity}</span>
                    <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-3 py-3"
                    >
                        <RiAddLine size={12} />
                    </button>
                </div>
            </div>
        </div>
    );
};