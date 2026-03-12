import type { Category } from "@/types/category.type";

const userId = localStorage.getItem("token");

export const DEFAULT_CATEGORIES: Category[] = [
  {
    id: `${userId}c1`,
    name: "Food & Dinning",
    budget: 600,
    type: "expense",
    iconName: "food",
    color: "orange",
  },
  {
    id: `${userId}c2`,
    name: "Shopping",
    budget: 400,
    type: "expense",
    iconName: "shopping",
    color: "pink",
  },
  {
    id: `${userId}c3`,
    name: "Rent",
    budget: 1200,
    type: "expense",
    iconName: "housing",
    color: "red",
  },
  {
    id: `${userId}c4`,
    name: "Entertaiment",
    budget: 200,
    type: "expense",
    iconName: "entertaiment",
    color: "sky",
  },
  {
    id: `${userId}c5`,
    name: "Education",
    budget: 300,
    type: "expense",
    iconName: "education",
    color: "blue",
  },
  {
    id: `${userId}c6`,
    name: "HealthCare",
    budget: 150,
    type: "expense",
    iconName: "healthcare",
    color: "pinkred",
  },
  {
    id: `${userId}c7`,
    name: "Transportation",
    budget: 300,
    type: "expense",
    iconName: "transport",
    color: "purple",
  },
  {
    id: `${userId}c8`,
    name: "Salary",
    budget: 0,
    type: "income",
    iconName: "savings",
    color: "green",
  },
  {
    id: `${userId}c9`,
    name: "Investment",
    budget: 0,
    type: "income",
    iconName: "investments",
    color: "aquagreen",
  },
];