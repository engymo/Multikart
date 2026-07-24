import type { RemixiconComponentType } from "@remixicon/react";

export type DropdownSection = {
    id: number;
    title: string;
    options: {
        id: number;
        label: string;
        href?: string;
    }[];
};

export type NavIcon = {
    id: number;
    name: string;
    icon: RemixiconComponentType;
    className?: string;
    color?: string;
    badge?: number;
    dropdown?: DropdownSection[];
};