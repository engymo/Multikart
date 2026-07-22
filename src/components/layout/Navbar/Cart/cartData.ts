import { CartItem } from "./CartItemRow";


export const initialCartItems: CartItem[] = [
    { id: 1, name: "Couture Edge", price: 6.74, quantity: 1, image: "/images/products/5.jpg" },
    { id: 2, name: "Classic Jacket", price: 7.84, quantity: 1, image: "/images/products/13.jpg" },
    { id: 3, name: "Urban Chic", price: 3.84, quantity: 2, image: "/images/products/12.jpg" },
];


export const actionButtons = [
    { label: "View Cart", onClick: () => console.log("View Cart") },
    { label: "Check Out", onClick: () => console.log("Check Out") },
  ];