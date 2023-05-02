import { uniqueId } from "lodash";

export const Menuitems = [
  {
    id: uniqueId(),
    title: "Category",
    subMenu: [
      {
        id: uniqueId(),
        title: "Fresh Vegetables",
        href: "/",
      },
      {
        id: uniqueId(),
        title: "Diet Nutrition",
        href: "/",
      },
      {
        id: uniqueId(),
        title: "Healthy Foods",
        href: "/",
      },
      {
        id: uniqueId(),
        title: "Grocery Items",
        href: "/",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Dietary",
    subMenu: [
      {
        id: uniqueId(),
        title: "Vegetarian",
        href: "/",
      },
      {
        id: uniqueId(),
        title: "Kakogenic",
        href: "/",
      },
      {
        id: uniqueId(),
        title: "Mediterranean",
        href: "/",
      },
      {
        id: uniqueId(),
        title: "Organics",
        href: "/",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Search",
    href: "/",
  },
];
