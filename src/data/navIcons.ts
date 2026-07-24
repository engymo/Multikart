import {
    RiBarChartHorizontalLine,
    RiSearchLine,
    RiEqualizer2Line,
    RiShoppingCartLine
} from "@remixicon/react";
import {NavIcon} from "@/types/NavIcon"


export const navIcons: NavIcon[] = [
    {
        id: 1,
        name: "mobilemenu",
        icon: RiBarChartHorizontalLine,
        className: "text-[#ec8951] cursor-pointer lg:hidden md:inline-block",
        color: "",
    },
    {
        id: 2,
        name: "search",
        icon: RiSearchLine,
        className: "cursor-pointer ps-[20px]  hidden lg:inline-block md:inline-block",
        color: "#6a6a6a",
    },
    {
        id: 3,
        name: "setting",
        icon: RiEqualizer2Line,
        className: "cursor-pointer ps-[20px]  hidden lg:inline-block md:inline-block",
        color: "#6a6a6a",
        dropdown: [
            {
                id: 1,
                title: "Language",
                options: [
                    { id: 101, label: "English", href: "#" },
                    { id: 102, label: "French", href: "#" },
                ],
            },
            {
                id: 2,
                title: "Currency",
                options: [
                    { id: 201, label: "Euro", href: "#" },
                    { id: 202, label: "Rupees", href: "#" },
                    { id: 203, label: "Pound", href: "#" },
                    { id: 204, label: "Dollar", href: "#" },
                ],
            },
        ],
    },
    {
        id: 4,
        name: "cart",
        icon: RiShoppingCartLine,
        className: "cursor-pointer ps-[20px]  hidden lg:inline-block md:inline-block",
        color: "#6a6a6a",
        badge: 2,
    },
];