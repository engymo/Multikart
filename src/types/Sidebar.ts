export interface SidebarLink {
  title: string;
}

export interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

export interface SidebarColumn {
  title: string;
  links: SidebarLink[];
  sections?: SidebarSection[];
}

export interface SidebarItem {
  title: string;
  image?: string;
  type?: "small" | "large";
  columns?: SidebarColumn[];
}

export interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}