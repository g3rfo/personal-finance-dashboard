import {
  addTransaction,
  updateTransaction,
} from "@/features/store/asyncThunks/transactionsThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import type { TransactionData } from "@/types/transaction.type";

function useTransactionFormHandleSubmit(action: "create" | "edit") {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.transactions.selectedId);

  switch (action) {
    case "create":
      return (data: TransactionData) => {
        return dispatch(addTransaction(data));
      };
    case "edit":
      if (!id) {
        return () => {};
      }
      return (data: TransactionData) => {
        return dispatch(updateTransaction({ ...data, id }));
      };
    default:
      return () => {};
  }
}

export default useTransactionFormHandleSubmit;
