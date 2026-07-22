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
    onUpdateQuantity: (id: number, delta: number) => void;
    onRemove: (id: number) => void;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({
    item,
    onUpdateQuantity,
    onRemove,
}) => {
    return (
        <div className="py-3 flex gap-3 items-start">
            <img
                src={item.image}
                alt={item.name}
                className="w-14 h-16 object-cover rounded bg-gray-50 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <h3 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h3>
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <button className="hover:text-gray-600 transition-colors">
                            <RiPencilLine size={14} />
                        </button>
                        <button
                            onClick={() => onRemove(item.id)}
                            className="hover:text-red-500 transition-colors"
                        >
                            <RiDeleteBinLine size={14} />
                        </button>
                    </div>
                </div>

                <p className="text-xs text-gray-500 mt-0.5">
                    {item.quantity} X ${item.price.toFixed(2)}
                </p>

                {/* Counter */}
                <div className="flex items-center mt-2 border border-gray-200 rounded w-max bg-gray-50">
                    <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-0.5 text-gray-500 hover:text-black transition-colors"
                    >
                        <RiSubtractLine size={12} />
                    </button>
                    <span className="px-2 text-xs font-medium text-gray-700">{item.quantity}</span>
                    <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-0.5 text-gray-500 hover:text-black transition-colors"
                    >
                        <RiAddLine size={12} />
                    </button>
                </div>
            </div>
        </div>
    );
};