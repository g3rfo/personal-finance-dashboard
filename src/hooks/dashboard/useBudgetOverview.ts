import { useAppSelector } from "@/features/store/hooks";
import { selectCategoriesNames } from "@/features/store/selectors/categoriesSelectors";
import { transactionsSumupByCategories } from "@/utils/transactionsSumupByCategories";

function useBudgetOverview() {
  const { categories, loading, error } = useAppSelector(
    (state) => state.categories,
  );
  const categoriesNames = useAppSelector(selectCategoriesNames) || [];
  const { transactions } = useAppSelector(
    (state) => state.transactions.monthly,
  );
  const spentByCategories =
    transactionsSumupByCategories(transactions, categoriesNames) || {};
  const categoriesLength = categories.length;
  return { categories, loading, error, spentByCategories, categoriesLength };
}

export default useBudgetOverview;
