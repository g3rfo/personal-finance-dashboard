import type useCategoriesContent from "@/hooks/categories/useCategoriesContent";
import { createContext } from "react";

export const CategoriesContext = createContext<ReturnType<
  typeof useCategoriesContent
> | null>(null);
