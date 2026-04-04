import {
  deleteTransaction,
  fetchFilteredTransactions,
} from "@/features/store/asyncThunks/transactionsThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import { setSelectedTransactionId } from "@/features/store/slices/transactionsSlice";
import { useState } from "react";

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

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const onEditHandler = (transactionId: string) => {
    setIsPopupOpen(true);
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
    isPopupOpen,
    setIsPopupOpen,
    onDeleteHandler,
    onEditHandler,
  };
}

export default useManagerContent;
