import { FooterSection, SocialLink } from "@/types/Footer";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiPinterestFill,
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine
} from "@remixicon/react";

export const footerInfo = {
  logoText: "Multikart",
  description:
    "Discover the latest trends and enjoy seamless shopping with our exclusive collections.",
};

export const contactList = [
  {
    text: "Multikart Demo Store, Demo Store India 345-659",
    icon: RiMapPinLine,
  },
  {
    text: "Call Us: 123-456-7898",
    icon: RiPhoneLine,
  },
  {
    text: "Email Us: Support@Multikart.Com",
    icon: RiMailLine,
  },
];

export const footerSections: FooterSection[] = [
  {
    title: "CATEGORIES",
    links: [
      { label: "Baby Essentials", url: "#" },
      { label: "Bag Emporium", url: "#" },
      { label: "Books", url: "#" },
      { label: "Christmas", url: "#" },
      { label: "Classic Furnishings", url: "#" },
      { label: "Crystal Clarity Optics", url: "#" },
    ],
  },
  {
    title: "USEFUL LINKS",
    links: [
      { label: "Home", url: "#" },
      { label: "Collections", url: "#" },
      { label: "About Us", url: "#" },
      { label: "Blogs", url: "#" },
      { label: "Offers", url: "#" },
      { label: "Search", url: "#" },
    ],
  },
  {
    title: "HELP CENTER",
    links: [
      { label: "My Account", url: "#" },
      { label: "My Orders", url: "#" },
      { label: "Track Order", url: "#" },
      { label: "Wishlist", url: "#" },
      { label: "Faq's", url: "#" },
      { label: "Contact Us", url: "#" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    icon: RiFacebookFill,
    url: "#",
  },
  {
    platform: "Twitter",
    icon: RiTwitterFill,
    url: "#",
  },
  {
    platform: "Instagram",
    icon: RiInstagramFill,
    url: "#",
  },
  {
    platform: "Pinterest",
    icon: RiPinterestFill,
    url: "#",
  },
];