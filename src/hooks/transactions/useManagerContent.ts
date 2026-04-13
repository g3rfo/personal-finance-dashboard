import {
  deleteTransaction,
  fetchFilteredTransactions,
} from "@/features/store/asyncThunks/transactionsThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import { setEditTransactionPopupState } from "@/features/store/slices/popupsSlice";
import { setSelectedTransactionId } from "@/features/store/slices/transactionsSlice";

function useManagerContent() {
  const { transactions, page, hasNextPage, loading, error } = useAppSelector(
    (state) => state.transactions.filtered,
  );
  const { monthFrom, monthTo, type, category } = useAppSelector(
    (state) => state.transactionsFilter,
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

  const onEditHandler = (transactionId: string) => {
    dispatch(setEditTransactionPopupState(true));
    dispatch(setSelectedTransactionId(transactionId));
  };

  const onDeleteHandler = (transactionId: string) => {
    dispatch(deleteTransaction(transactionId));
  };

  return {
    transactions,
    viewMoreHandler,
    hasNextPage,
    loading,
    transactionsLength,
    error,
    onDeleteHandler,
    onEditHandler,
  };
}

export default useManagerContent;
