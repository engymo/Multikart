import {
  SidebarItem,
} from "@/types/Sidebar";

export const categories: SidebarItem[] = [
  {
    title: "Clothing",
    type: "large",
    image: "/images/fashion.jpg",

    columns: [
      {
        title: "Women's Fashion",
        links: [
          { title: "Dresses" },
          { title: "Skirts" },
          { title: "Western Wear" },
          { title: "Ethic Wear" },
          { title: "Sport Wear" },
        ],

        sections: [
          {
            title: "Men's Fashion",
            links: [
              { title: "Sports Wear" },
              { title: "Western Wear" },
              { title: "Ethic Wear" },
            ],
          },
        ],
      },

      {
        links: [
          { title: "Fashion Jewellery" },
          { title: "Caps And Hats" },
          { title: "Precious Jewellery" },
          { title: "Necklaces" },
          { title: "Earrings" },
          { title: "Wrist Wear" },
          { title: "Ties" },
          { title: "Cufflinks" },
        ],
      },
    ],
  },

{
  title: "Bags",
  type: "small",
  columns: [
    {
      links: [
        { title: "Shopper Bags" },
        { title: "Laptop Bags" },
        { title: "Clutches" },
        { title: "Purses" },
      ],
    },
  ],
},

  {
    title: "Footwear",
    type: "small",
    columns: [
      {
        links: [
          { title: "Sport Shoes" },
          { title: "Formal Shoes" },
          { title: "Casual Shoes" },
        ],
      },
    ],
  },

  {
    title: "Watches",
  },

  {
    title: "Accessories",
    type: "small",
    columns: [
      {
        links: [
          { title: "Fashion Jewellery" },
          { title: "Caps And Hats" },
          { title: "Precious Jewellery" },
          { title: "Necklaces" },
          { title: "Earrings" },
          { title: "Wrist Wear" },
          { title: "Ties" },
          { title: "Cufflinks" },
          { title: "Pocket Squares" },
        ],
      },
    ],
  },

  {
    title: "House Of Design",
  },

  {
    title: "Beauty & Personal Care",
    type: "small",
    columns: [
      {
        links: [
          { title: "Makeup" },
          { title: "Skincare" },
          { title: "Premium Beauty" },
          { title: "Fragrances" },
          { title: "Luxury Beauty" },
          { title: "Hair Care" },
          { title: "Tools & Brushes" },
        ],
      },
    ],
  },

  {
    title: "Home & Decor",
  },

  {
    title: "Kitchen",
  },
];