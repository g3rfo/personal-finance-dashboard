import { deleteCategory } from "@/features/store/asyncThunks/categoriesThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import { setSelectedCategoryId } from "@/features/store/slices/categoriesSlice";
import { setEditCategoryPopupState } from "@/features/store/slices/popupsSlice";
import type { Category } from "@/types/category.type";
import { useMemo } from "react";

function useCategoriesContent() {
  const { categories, loading, error } = useAppSelector(
    (state) => state.categories,
  );

  const expenseCategories: Category[] = useMemo(
    () => categories.filter((category) => category.type === "expense"),
    [categories],
  );
  const incomeCategories: Category[] = useMemo(
    () => categories.filter((category) => category.type === "income"),
    [categories],
  );

  const length: Record<string, number> = useMemo(
    () => ({
      expense: expenseCategories.length,
      income: incomeCategories.length,
    }),
    [expenseCategories.length, incomeCategories.length],
  );

  const categoriesByType: Record<string, Category[]> = useMemo(
    () => ({
      expense: expenseCategories,
      income: incomeCategories,
    }),
    [expenseCategories, incomeCategories],
  );

  const dispatch = useAppDispatch();

  const onEditHandler = (categoryId: string) => {
    dispatch(setEditCategoryPopupState(true));
    dispatch(setSelectedCategoryId(categoryId));
  };

  const onDeleteHandler = (categoryId: string) => {
    dispatch(deleteCategory(categoryId));
  };

  return {
    categories,
    loading,
    error,
    length,
    categoriesByType,
    onEditHandler,
    onDeleteHandler,
  };
}

export default useCategoriesContent;
