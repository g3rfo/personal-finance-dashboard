import type { CategoryFormData } from "@/types/category.type";

export const DEFAULT_CATEGORIES: CategoryFormData[] = [
  {
    name: "Food & Dinning",
    budget: 600,
    type: "expense",
    iconName: "food",
    color: "orange",
  },
  {
    name: "Shopping",
    budget: 400,
    type: "expense",
    iconName: "shopping",
    color: "pink",
  },
  {
    name: "Rent",
    budget: 1200,
    type: "expense",
    iconName: "housing",
    color: "red",
  },
  {
    name: "Entertainment",
    budget: 200,
    type: "expense",
    iconName: "entertainment",
    color: "sky",
  },
  {
    name: "Education",
    budget: 300,
    type: "expense",
    iconName: "education",
    color: "blue",
  },
  {
    name: "HealthCare",
    budget: 150,
    type: "expense",
    iconName: "healthcare",
    color: "pinkred",
  },
  {
    name: "Transportation",
    budget: 300,
    type: "expense",
    iconName: "transport",
    color: "purple",
  },
  {
    name: "Salary",
    budget: 0,
    type: "income",
    iconName: "savings",
    color: "green",
  },
  {
    name: "Investment",
    budget: 0,
    type: "income",
    iconName: "investments",
    color: "aquagreen",
  },
] as const;
