import { useAppSelector } from "@/features/store/hooks";
import {
  selectExpenseCategoriesNames,
  selectIncomeCategoriesNames,
} from "@/features/store/selectors/categoriesSelectors";
import ErrorTransactionForm from "./ErrorTransactionForm";
import AddTransactionForm from "./AddTransactionForm";

function AddTransactionFormContent() {
  const expenseCategories = useAppSelector(selectExpenseCategoriesNames);
  const incomeCategories = useAppSelector(selectIncomeCategoriesNames);
  const hasNoCategories =
    expenseCategories.length === 0 && incomeCategories.length === 0;

  if (hasNoCategories) {
    return <ErrorTransactionForm />;
  }

  return (
    <AddTransactionForm
      expenseCategories={expenseCategories}
      incomeCategories={incomeCategories}
    />
  );
}

export default AddTransactionFormContent;
