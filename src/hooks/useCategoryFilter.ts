import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import {
  selectExpenseCategoriesNames,
  selectIncomeCategoriesNames,
} from "@/features/store/selectors/categoriesSelectors";
import { setCategoryFilter } from "@/features/store/slices/transactionsFilterSlice";
import { useEffect, useMemo } from "react";

function useCategoryFilter() {
  const { category, type } = useAppSelector(
    (state) => state.transactionsFilter,
  );
  const dispatch = useAppDispatch();

  const incomeCategories = useAppSelector(selectIncomeCategoriesNames);
  const expenseCategories = useAppSelector(selectExpenseCategoriesNames);

  const categories = useMemo(() => {
    const availableCategories: string[] = ["All Categories"];

    if (type.toString() === "income") {
      availableCategories.push(...incomeCategories);
    } else if (type.toString() === "expense") {
      availableCategories.push(...expenseCategories);
    } else {
      availableCategories.push(...incomeCategories, ...expenseCategories);
    }

    return availableCategories;
  }, [type, incomeCategories, expenseCategories]);

  useEffect(() => {
    if (!categories.includes(category)) {
      dispatch(setCategoryFilter("All Categories"));
    }
  }, [category, categories, dispatch]);

  return { category, categories };
}

export default useCategoryFilter;
