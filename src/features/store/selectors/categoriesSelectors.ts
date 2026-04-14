import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { CATEGORY_COLORS } from "@/constants/categoryColors";
import type { ChartConfig } from "@/components/ui/chart";

export const selectCategories = (state: RootState) => {
  return state.categories.categories;
};

export const selectCategoriesNames = createSelector(
  [selectCategories],
  (categories) => {
    return categories?.map((c) => c.name);
  },
);

export const makeSelectCategoriesNamesByType = (type: "income" | "expense") =>
  createSelector([selectCategories], (categories) =>
    categories?.filter((c) => c.type === type).map((c) => c.name),
  );

export const selectExpenseCategoriesNames =
  makeSelectCategoriesNamesByType("expense");
export const selectIncomeCategoriesNames =
  makeSelectCategoriesNamesByType("income");

export const selectCategoriesDataForTransactions = createSelector(
  [selectCategories],
  (categories) => {
    const categoryData: Record<string, { color: string; iconName: string }> =
      {};
    categories?.forEach((category) => {
      categoryData[category.name] = {
        color: category.color,
        iconName: category.iconName,
      };
    });
    return categoryData;
  },
);

const makeSelectCategoryById = (id: string) => {
  return createSelector([selectCategories], (categories) => {
    return categories?.find((c) => c.id === id) ?? null;
  });
};

export const selectCategoriesDataToEdit = makeSelectCategoryById;

// Analytics selectors
export const selectExpenseCategoriesChartData = createSelector(
  [selectCategories],
  (categories) => {
    return categories
      ?.filter((c) => c.type === "expense")
      .map((c) => ({
        category: c.name,
        color: c.color,
      }));
  },
);

const makeSelectCategoriesPieChartConfigData = (type: "income" | "expense") =>
  createSelector([selectCategories], (categories) => {
    return categories
      ?.filter((c) => c.type === type)
      .reduce(
        (acc, c) => {
          const name = c.name
            .split(" ")
            .map((word, index) => {
              if (index === 0) return word.toLowerCase();
              return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .join("");

          acc[name] = {
            label: c.name,
            color: CATEGORY_COLORS[c.color] || "#ffffff",
          };
          return acc;
        },
        {} as ChartConfig,
      );
  });

export const selectIncomeCategoriesPieChartConfigData =
  makeSelectCategoriesPieChartConfigData("income");
export const selectExpenseCategoriesPieChartConfigData =
  makeSelectCategoriesPieChartConfigData("expense");
