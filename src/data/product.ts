import { Product } from "@/types/product";
import {
    RiTruckLine,
    RiArrowGoBackLine
} from "@remixicon/react";

export const product: Product = {
    id: 1,

    title: "Gym Coords Set (Brown)",

    subtitle: "Selling fast! 4 people have this in their carts.",

    price: 15,
    oldPrice: 20,

    rating: 5,

    reviewCount: 20,

    sku: "SP18",

    weight: "150 Gms",

    quantity: 40,

    stock: "In Stock",

    description: "",

    information: "",

    images: [
        {
            id: 1,
            image: "/images/products/17.jpg",
            alt: "Gym Coords Set Brown Front"
        },
        {
            id: 2,
            image: "/images/products/18.jpg",
            alt: "Gym Coords Set Brown Front",
        },
        {
            id: 3,
            image: "/images/products/19.jpg",
            alt: "Gym Coords Set Brown Front",
        }
    ],

    colors: [

        {
            id: 1,
            name: "Brown",
            image: "/images/colors/brown.jpg"
        },

        {
            id: 2,
            name: "Blue",
            image: "/images/colors/blue.jpg"
        },

        {
            id: 3,
            name: "Green",
            image: "/images/colors/green.jpg"
        }

    ],

    accordion: [

        {
            id: 1,
            title: "Product Description",
            content: "Lorem..."
        },

        {
            id: 2,
            title: "Information",
            content: "Lorem..."
        }

    ],

    payments: [

        {
            id: 1,
            image: "/images/payment/visa.png"
        },

        {
            id: 2,
            image: "/images/payment/mastercard.png"
        },

        {
            id: 3,
            image: "/images/payment/paypal.png"
        }

    ],

    securePayments: [

        {
            id: 1,
            image: "/images/payment/mcafee.png"
        },

        {
            id: 2,
            image: "/images/payment/trust.png"
        }

    ],

    delivery: [

        {
            id: 1,
            icon: "RiTruckLine",
            text: "Your order is likely to reach you within 7 days."
        },

        {
            id: 2,
            icon: "RiArrowGoBackLine",
            text: "Hassle free returns within 7 Days."
        }

    ],
};