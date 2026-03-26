import { fetchFilteredTransactions } from "@/features/store/asyncThunks/transactionsThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";

function useManagerContent() {
  const { monthFrom, monthTo, type, category } = useAppSelector(
    (state) => state.transactionsFilter,
  );
  const { transactions, page, hasNextPage, loading, error } = useAppSelector(
    (state) => state.transactions.filtered,
  );
  const transactionsLength = transactions.length;

  const dispatch = useAppDispatch();
  const viewMoreHandler = () => {
    if (!hasNextPage || loading) return;

    dispatch(
      fetchFilteredTransactions({
        monthFrom,
        monthTo,
        type,
        category,
        pageNumber: page + 1,
      }),
    );
  };

  return {
    transactions,
    viewMoreHandler,
    hasNextPage,
    loading,
    transactionsLength,
    error,
  };
}

export default useManagerContent;
