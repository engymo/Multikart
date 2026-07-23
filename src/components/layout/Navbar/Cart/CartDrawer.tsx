"use client";

import React from "react";
import { ShippingProgressBar } from "./ShippingProgressBar";
import { CartItemRow } from "./CartItemRow";
import type { CartDropdownProps } from "@/types/cart";
import { RiCloseLine } from "@remixicon/react";
import { actionButtons } from "./cartData";
import { useCartSidebar } from "@/hooks/useCartSidebar";

export const CartDrawer: React.FC<CartDropdownProps> = ({ isOpen, onClose }) => {
    const { items, subtotal, updateQuantity, removeItem, clearCart } = useCartSidebar();

    return (
        <>
            {/* 1. Dark Backdrop Panel */}
            <div
                className={`fixed inset-0 bg-black/20 z-50 transition-opacity duration-300 ${isOpen ?
                    "opacity-100 visible" : "opacity-0 invisible "
                    }`}
                onClick={onClose}
            />

            {/* 2. Side Drawer Container */}
            <aside
                className={`fixed top-0 right-0 h-full w-[320px] sm:w-[380px] bg-white z-50 shadow-md flex
                     flex-col justify-between
                     transform transition-transform duration-300 ease-in-out 
                     ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 
                border-b border-gray-100" style={{ fontFamily: "var(--font-lato)" }}>
                    <h2 style={{ fontFamily: "var(--font-lato)" }}
                        className=" text-[18.5px] font-bold text-[#222]">
                        My Cart ({items.length})
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 text-[#333333] bg-[#f8f8f8] border border-[#eee]">
                        <RiCloseLine size={22} />
                    </button>
                </div>

                {/* Free Shipping Bar */}
                <ShippingProgressBar neededAmount={20.96} progressPercentage={65} />
                <div className="border-b border-gray-100 pt-2"></div>
                {/* Clear Cart Button */}
                {items.length > 0 && (
                    <div className="px-4 pt-2 text-right">
                        <button
                            onClick={clearCart}
                            className="font-lato text-[16px] text-[#ec8951] font-semibold"
                        >
                            Clear Cart
                        </button>
                    </div>
                )}

                {/* Items Scrollable List */}
                <div className="flex-1 px-4 divide-y divide-gray-100 overflow-y-auto">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400 text-sm">
                            <p>Your cart is empty.</p>
                        </div>
                    ) : (
                        items.map((item, index) => (
                            <CartItemRow
                                key={item.id}
                                item={item}
                                index={index}
                                onUpdateQuantity={updateQuantity}
                                onRemove={removeItem}
                            />
                        ))
                    )}
                </div>

                {/* Drawer Footer Panel */}
                <div className="font-lato py-2.5 px-[15px] pb-[20px] border-t border-gray-100 bg-white shadow-md">
                    <div className="flex justify-between items-center font-medium py-2.5">
                        <span className="text-sm lg:text-[20px] text-[rgb(51, 51, 51)]">Sub Total :</span>
                        <span className="text-sm lg:text-[20px] font-semibold text-[#ec8951]">
                            ${subtotal.toFixed(2)}
                        </span>
                    </div>

                    <div className=" border-b border-gray-200"></div>

                    <div className="grid grid-cols-2 gap-2 mt-2">
                        {actionButtons.map((btn, index) => (
                            <button
                                key={index}
                                onClick={btn.onClick}
                                className="bg-[#ec8951] text-white text-sm lg:text-[15px] font-semibold py-2.5 cursor-pointer"
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default CartDrawer;