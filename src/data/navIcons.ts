import type { RemixiconComponentType } from "@remixicon/react";
import {
    RiBarChartHorizontalLine,
    RiSearchLine,
    RiEqualizer2Line,
    RiShoppingCartLine
} from "@remixicon/react";

export type NavIcon = {
    id: number;
    name: string;
    icon: RemixiconComponentType;
    className?: string;
    color?: string;
    badge?: number;
};

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