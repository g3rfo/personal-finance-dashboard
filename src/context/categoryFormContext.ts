import type useCategoryForm from "@/hooks/categoryForm/useCategoryForm";
import { createContext } from "react";

export const CategoryFormContext = createContext<ReturnType<
  typeof useCategoryForm
> | null>(null);
