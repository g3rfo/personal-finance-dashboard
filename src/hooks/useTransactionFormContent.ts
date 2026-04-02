import { useAppSelector } from "@/features/store/hooks";
import {
  selectExpenseCategoriesNames,
  selectIncomeCategoriesNames,
} from "@/features/store/selectors/categoriesSelectors";

function useTransactionFormContent() {
  const expenseCategories = useAppSelector(selectExpenseCategoriesNames);
  const incomeCategories = useAppSelector(selectIncomeCategoriesNames);
  const hasNoCategories =
    expenseCategories.length === 0 && incomeCategories.length === 0;

  return {
    hasNoCategories,
  };
}

export default useTransactionFormContent;
