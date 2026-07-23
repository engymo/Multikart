import type { RemixiconComponentType } from "@remixicon/react";



export interface LinkItem {
  label: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: LinkItem[];
}



export interface SocialLink {
  platform: string;
  icon: RemixiconComponentType;
  url: string;
}
export interface ContactItem {
  text: string;
  icon: RemixiconComponentType;
}