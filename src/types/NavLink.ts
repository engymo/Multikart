export interface MegaMenuLink {
  badge?: string;
  id: number;
  title: string;
  href?: string;
  isHot?: boolean; 
}

export interface SubSection {
  id: number;
  title: string;
  links: MegaMenuLink[];
}

export interface MegaMenuSection {
  id: number;
  title: string;
  links: MegaMenuLink[];
  subSections?: SubSection[]; 
}

export interface DropdownLink {
  id: number;
  title: string;
  href?: string;
  badge?: string;
}

export interface NavLink {
  id: number;
  title: string;
  href?: string;
  badge?: string;
  dropdown?: DropdownLink[];
  megaMenu?: MegaMenuSection[];
}