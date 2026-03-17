import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectCategories = (state: RootState) => {
  return state.categories.categories;
}

export const selectCategoriesNames = createSelector(
  [selectCategories],
  (categories) => {
    return categories?.map((c) => c.name);
  }
);

export const makeSelectCategoriesNamesByType = (type: "income" | "expense") =>
  createSelector([selectCategories], (categories) =>
    categories
      ?.filter((c) => c.type === type)
      .map((c) => c.name)
  );

export const selectExpenseCategoriesNames = makeSelectCategoriesNamesByType("expense");
export const selectIncomeCategoriesNames = makeSelectCategoriesNamesByType("income");

export const selectCategoriesDataForTransactions = createSelector(
  [selectCategories],
  (categories) => {
    const categoryData: Record<string, { color: string; iconName: string }> = {};
    categories?.forEach((category) => {
      categoryData[category.name] = {
        color: category.color,
        iconName: category.iconName,
      };
    });
    return categoryData;
  }
);