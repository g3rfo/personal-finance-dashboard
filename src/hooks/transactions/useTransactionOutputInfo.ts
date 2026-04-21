import { useAppSelector } from "@/features/store/hooks";
import { selectCategoriesDataForTransactions } from "@/features/store/selectors/categoriesSelectors";
import type { Transaction } from "@/types/transaction.type";
import { getTransactionOutputInfo } from "@/utils/getTransactionOutputInfo";

function useTransactionOutputInfo(transactions: Transaction[]) {
  const categoryData =
    useAppSelector(selectCategoriesDataForTransactions) || {};

  const safeTransactions = Array.isArray(transactions) ? transactions : [];

  const transactionsOutputInfo = safeTransactions.map((transaction) =>
    getTransactionOutputInfo(
      categoryData[transaction.category]?.iconName,
      categoryData[transaction.category]?.color,
    ),
  );

  return transactionsOutputInfo;
}

export default useTransactionOutputInfo;
