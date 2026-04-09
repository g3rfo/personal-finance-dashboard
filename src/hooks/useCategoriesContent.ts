import { deleteCategory } from "@/features/store/asyncThunks/categoriesThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import { setSelectedCategoryId } from "@/features/store/slices/categoriesSlice";
import type { Category } from "@/types/category.type";
import { useState } from "react";

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

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onEditHandler = (categoryId: string) => {
    setIsPopupOpen(true);
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
    isPopupOpen,
    setIsPopupOpen,
    onEditHandler,
    onDeleteHandler,
  };
}

export default useCategoriesContent;
