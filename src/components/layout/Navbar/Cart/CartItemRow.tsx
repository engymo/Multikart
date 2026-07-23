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
        <div className="font-libre-baskerville py-3 flex justify-between ">

            <div className="flex items-start gap-1">
                <div>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-16 object-cover px-1 bg-gray-50 "
                    />
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                        {item.quantity} X ${item.price.toFixed(2)}
                    </p>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col ">

                    <div className="flex gap-1.5 text-gray-400 text-end">
                        <div>
                            <button>
                                <RiPencilLine size={14} />
                            </button>
                            <button
                                onClick={() => onRemove(item.id)}
                            >
                                <RiDeleteBinLine size={14} />
                            </button>
                        </div>

                    </div>
                    <div className="flex items-center mt-2 border border-gray-200 rounded w-max bg-gray-50">
                        <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="px-2 py-2"
                        >
                            <RiSubtractLine size={12} />
                        </button>
                        <span className="px-2 text-xs font-medium text-gray-700">{item.quantity}</span>
                        <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="px-2 py-2"
                        >
                            <RiAddLine size={12} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};