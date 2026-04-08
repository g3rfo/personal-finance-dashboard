import { useAppSelector } from "@/features/store/hooks";
import {
  selectExpenseCategoriesNames,
  selectIncomeCategoriesNames,
} from "@/features/store/selectors/categoriesSelectors";

function useCategoriesContent() {
  const expenseCategories = useAppSelector(selectExpenseCategoriesNames);
  const incomeCategories = useAppSelector(selectIncomeCategoriesNames);

  const length: Record<string, number> = {
    expense: expenseCategories.length,
    income: incomeCategories.length,
  };

  return { expenseCategories, incomeCategories, length };
}

export default useCategoriesContent;
