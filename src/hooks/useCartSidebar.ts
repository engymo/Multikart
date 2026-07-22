import { useState } from 'react';
import { CartItem } from '@/components/layout/Navbar/Cart/CartItemRow';
import { initialCartItems } from '@/components/layout/Navbar/Cart/cartData';

export const useCartSidebar = () => {
    // 1. حالة فتح وقفل الـ Drawer
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
    const toggleCart = () => setIsCartOpen((prev) => !prev);

    const handleIconClick = (iconName: string) => {
        if (iconName === 'cart') {
            openCart();
        }
    };

    // 2. حالة إدارة منتجات السلة (Cart Management)
    const [items, setItems] = useState<CartItem[]>(initialCartItems);

    const updateQuantity = (id: number, delta: number) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQty = item.quantity + delta;
                    return { ...item, quantity: newQty > 0 ? newQty : 1 };
                }
                return item;
            })
        );
    };

    const removeItem = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setItems([]);

    const subtotal = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return {
        // UI Visibility States
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        handleIconClick,

        // Cart Items States & Logic
        items,
        subtotal,
        updateQuantity,
        removeItem,
        clearCart,
    };
};