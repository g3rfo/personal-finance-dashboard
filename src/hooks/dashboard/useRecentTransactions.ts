import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import useTransactionOutputInfo from "../transactions/useTransactionOutputInfo";
import { fetchTransactions } from "@/features/store/asyncThunks/transactionsThunks";

function useRecentTransactions() {
  const { transactions, page, hasNextPage, loading, error } = useAppSelector(
    (state) => state.transactions.paginated,
  );

  const transactionsOutputInfo = useTransactionOutputInfo(transactions);
  const transactionsLength = Array.isArray(transactions)
    ? transactions.length
    : 0;

  const dispatch = useAppDispatch();
  const viewMoreHandler = () => {
    dispatch(fetchTransactions(page + 1));
  };

  return {
    error,
    transactions,
    page,
    hasNextPage,
    loading,
    transactionsOutputInfo,
    viewMoreHandler,
    transactionsLength,
  };
}

export default useRecentTransactions;
