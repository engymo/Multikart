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
                className={`fixed inset-0 bg-black/20 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible "
                    }`}
                onClick={onClose}
            />

            {/* 2. Side Drawer Container */}
            <aside
                className={`fixed top-0 right-0 h-full w-[320px] sm:w-[380px] bg-white z-50 shadow-2xl flex flex-col justify-between
                     transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Drawer Header */}
                <div className="font-libre-baskerville flex items-center justify-between p-4 border-b border-gray-100">
                    <h2 className=" text-[18px] font-bold text-[#222] uppercase ">
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

                {/* Clear Cart Button */}
                {items.length > 0 && (
                    <div className="px-4 pt-2 text-right">
                        <button
                            onClick={clearCart}
                            className="font-libre-baskerville text-sm text-[#ec8951] font-medium"
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
                        items.map((item) => (
                            <CartItemRow
                                key={item.id}
                                item={item}
                                onUpdateQuantity={updateQuantity}
                                onRemove={removeItem}
                            />
                        ))
                    )}
                </div>

                {/* Drawer Footer Panel */}
                <div className="p-4 border-t border-gray-100 bg-white shadow-inner">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-gray-600">Sub Total :</span>
                        <span className="text-lg font-bold text-[#ec8951]">
                            ${subtotal.toFixed(2)}
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        {actionButtons.map((btn, index) => (
                            <button
                                key={index}
                                onClick={btn.onClick}
                                className="bg-[#ec8951] hover:bg-[#d97742] text-white text-xs font-bold
                 py-2.5 rounded transition-colors uppercase"
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