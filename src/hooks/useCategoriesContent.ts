import { useAppSelector } from "@/features/store/hooks";
import type { Category } from "@/types/category.type";

function useCategoriesContent() {
  const { categories, loading, error } = useAppSelector(
    (state) => state.categories,
  );

  const expenseCategories: Category[] =
    categories.filter((category) => category.type === "expense") ?? [];
  const incomeCategories: Category[] =
    categories.filter((category) => category.type === "income") ?? [];

  const length: Record<string, number> = {
    expense: expenseCategories.length,
    income: incomeCategories.length,
  };

  const categoriesByType: Record<string, Category[]> = {
    expense: expenseCategories,
    income: incomeCategories,
  };

  return {
    categories,
    loading,
    error,
    length,
    categoriesByType,
  };
}

export default useCategoriesContent;
