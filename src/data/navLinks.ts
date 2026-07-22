export type MenuLink = {
  id: number;
  title: string;
  href?: string;
};

export type MegaMenuSection = {
  id: number;
  title: string;
  links: MenuLink[];
};

export type NavLink = {
  id: number;
  title: string;
  href?: string;
  megaMenu?: MegaMenuSection[];
  dropdown?: MenuLink[];
};

export const navLinks: NavLink[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },

  {
    id: 2,
    title: "Feature",
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
      },

      {
        id: 2,
        title: "Email Template",
        links: [
          { id: 1, title: "Welcome Template" },
          { id: 2, title: "Order Success" },
          { id: 3, title: "Reset Password" },
          { id: 4, title: "Offer Template" },
          { id: 5, title: "Abandoned Cart" },
        ],
      },

      {
        id: 3,
        title: "Elements",
        links: [
          { id: 1, title: "Title" },
          { id: 2, title: "Collection Banner" },
          { id: 3, title: "Home Slider" },
          { id: 4, title: "Category" },
          { id: 5, title: "Service" },
        ],
      },

      {
        id: 4,
        title: "Themes",
        links: [
          { id: 1, title: "Fashion" },
          { id: 2, title: "Furniture" },
          { id: 3, title: "Electronic" },
          { id: 4, title: "Shoes" },
          { id: 5, title: "Watch" },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Shop",
    megaMenu: [
      {
        id: 1,
        title: "Shop Layout",
        links: [
          { id: 1, title: "Left Sidebar" },
          { id: 2, title: "Right Sidebar" },
          { id: 3, title: "No Sidebar" },
          { id: 4, title: "3 Grid" },
          { id: 5, title: "4 Grid" },
          { id: 6, title: "List View" },
        ],
      },

      {
        id: 2,
        title: "Product Details",
        links: [
          { id: 1, title: "Accordion" },
          { id: 2, title: "Sticky" },
          { id: 3, title: "Thumbnail" },
          { id: 4, title: "Image Swatch" },
        ],
      },

      {
        id: 3,
        title: "Product Features",
        links: [
          { id: 1, title: "Compare" },
          { id: 2, title: "Wishlist" },
          { id: 3, title: "Cart" },
          { id: 4, title: "Checkout" },
        ],
      },

      {
        id: 4,
        title: "Collections",
        links: [
          { id: 1, title: "Men" },
          { id: 2, title: "Women" },
          { id: 3, title: "Kids" },
          { id: 4, title: "Accessories" },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Product",
    megaMenu: [
      {
        id: 1,
        title: "Sidebar",
        links: [
          { id: 1, title: "Left Sidebar" },
          { id: 2, title: "Right Sidebar" },
          { id: 3, title: "No Sidebar" },
        ],
      },

      {
        id: 2,
        title: "Product Pages",
        links: [
          { id: 1, title: "Accordion" },
          { id: 2, title: "Sticky" },
          { id: 3, title: "Thumbnail" },
          { id: 4, title: "Gallery" },
        ],
      },

      {
        id: 3,
        title: "Product Types",
        links: [
          { id: 1, title: "Simple Product" },
          { id: 2, title: "Variable Product" },
          { id: 3, title: "Grouped Product" },
        ],
      },

      {
        id: 4,
        title: "More",
        links: [
          { id: 1, title: "Reviews" },
          { id: 2, title: "Size Chart" },
          { id: 3, title: "FAQ" },
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