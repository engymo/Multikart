import { NavLink } from "@/types/NavLink";

export const navLinks: NavLink[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },

  {
    id: 2,
    title: "Feature",
    badge: "NEW",
    megaMenu: [
      {
        id: 1,
        title: "Invoice Template",
        links: [
          { id: 1, title: "Invoice 1" },
          { id: 2, title: "Invoice 2" },
          { id: 3, title: "Invoice 3" },
          { id: 4, title: "Invoice 4" },
          { id: 5, title: "Invoice 5" },
        ],
        subSections: [
          {
            id: 1,
            title: "Elements",
            links: [{ id: 1, title: "Elements Page", isHot: true }],
          },
        ],
      },
      {
        id: 2,
        title: "Email Template",
        links: [
          { id: 1, title: "Welcome" },
          { id: 2, title: "Announcement" },
          { id: 3, title: "Abandonment" },
          { id: 4, title: "Offer" },
          { id: 5, title: "Offer 2" },
          { id: 6, title: "Review" },
          { id: 7, title: "Featured Product" },
        ],
      },
      {
        id: 3,
        title: "Email Template",
        links: [
          { id: 1, title: "Black Friday" },
          { id: 2, title: "Christmas" },
          { id: 3, title: "Cyber-Monday" },
          { id: 4, title: "Flash Sale" },
          { id: 5, title: "Order Success" },
          { id: 6, title: "Order Success 2" },
        ],
      },
      {
        id: 4,
        title: "Cookie Bar",
        links: [
          { id: 1, title: "Bottom", isHot: true },
          { id: 2, title: "Bottom Left" },
          { id: 3, title: "Bottom Right" },
        ],
        subSections: [
          {
            id: 1,
            title: "Search",
            links: [{ id: 1, title: "Ajax Search", isHot: true }],
          },
        ],
      },
      {
        id: 5,
        title: "Model",
        links: [
          { id: 1, title: "Newsletter" },
          { id: 2, title: "Exit", isHot: true },
          { id: 3, title: "Christmas" },
          { id: 4, title: "Black Friday" },
          { id: 5, title: "Cyber Monday" },
          { id: 6, title: "New Year" },
        ],
      },
      {
        id: 6,
        title: "Add To Cart",
        links: [
          { id: 1, title: "Cart Modal Popup" },
          { id: 2, title: "Cart Top" },
          { id: 3, title: "Cart Bottom" },
          { id: 4, title: "Cart Left" },
          { id: 5, title: "Cart Right" },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "shops",
    dropdown: [
      { id: 1, title: "Tab Style", badge: "NEW" },
      { id: 2, title: "Top Filter" },
      { id: 3, title: "Modern" },
      { id: 4, title: "Left Sidebar" },
      { id: 5, title: "Right Sidebar" },
      { id: 6, title: "No Sidebar" },
      { id: 7, title: "Category Slider" },
      { id: 8, title: "Sidebar Popup" },
      { id: 9, title: "Metro" },
      { id: 10, title: "Full Width" },
      { id: 11, title: "Load More" },
      { id: 12, title: "Two Grid" },
      { id: 13, title: "Three Grid" },
      { id: 14, title: "Four Grid" },
      { id: 15, title: "List View" },
    ],
  },

  {
    id: 4,
    title: "Product",
    megaMenu: [
      {
        id: 1,
        title: "Product Page",
        links: [
          { id: 1, title: "Product Thumbnail" },
          { id: 2, title: "Product Image" },
          { id: 3, title: "Product Slider" },
          { id: 4, title: "Product Accordion" },
          { id: 5, title: "Product Sticky" },
          { id: 6, title: "Product Vertical Tab" },
        ],
        subSections: [
          {
            id: 1,
            title: "Product Features",
            links: [
              { id: 1, title: "Sticky Checkout" },
              { id: 2, title: "Secure Checkout" },
              { id: 3, title: "Social Share" },
              { id: 4, title: "Related Products" },
              { id: 5, title: "Wishlist & Compare" },
            ],
          },
        ],
      },

      {
        id: 2,
        title: "Product Page",
        links: [
          { id: 1, title: "Product Sidebar Left" },
          { id: 2, title: "Product Sidebar Right" },
          { id: 3, title: "Product No Sidebar" },
          { id: 4, title: "Product Column Thumbnail" },
          { id: 5, title: "Product Thumbnail Image ..." },
        ],
      },

      {
        id: 3,
        title: "Product Variants Style",
        links: [
          { id: 1, title: "Variant Rectangle" },
          { id: 2, title: "Variant Circle" },
          { id: 3, title: "Variant Image Swatch" },
          { id: 4, title: "Variant Color" },
          { id: 5, title: "Variant Radio Button" },
          { id: 6, title: "Variant Dropdown" },
        ],
      },

      {
        id: 4,
        title: "Product Features",
        links: [
          { id: 1, title: "Product Simple" },
          { id: 2, title: "Product Classified" },
          { id: 3, title: "Size Chart" },
          { id: 4, title: "Delivery & Return" },
          { id: 5, title: "Product Review" },
          { id: 6, title: "Ask An Expert" },
        ],
      },

      {
        id: 5,
        title: "Product Features",
        links: [
          { id: 1, title: "Bundle (Cross Sale)" },
          { id: 2, title: "Hot Stock Progress" },
          { id: 3, title: "Out Stock" },
          { id: 4, title: "Sale Countdown" },
          { id: 5, title: "Product Zoom" },
        ],
      },
    ],
  },

  {
    id: 5,
    title: "Pages",
    dropdown: [
      { id: 1, title: "About Us" },
      { id: 2, title: "Search" },
      { id: 3, title: "Contact" },
      { id: 4, title: "FAQ" },
      { id: 5, title: "Coming Soon" },
      { id: 6, title: "404" },
    ],
  },

  {
    id: 6,
    title: "Blog",
    dropdown: [
      { id: 1, title: "Left Sidebar" },
      { id: 2, title: "Right Sidebar" },
      { id: 3, title: "No Sidebar" },
      { id: 4, title: "Blog Details" },
    ],
  },
];