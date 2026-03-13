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
)