import {
  addTransaction,
  updateTransaction,
} from "@/features/store/asyncThunks/transactionsThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import {
  setAddTransactionPopupState,
  setEditTransactionPopupState,
} from "@/features/store/slices/popupsSlice";
import type { TransactionData } from "@/types/transaction.type";

function useTransactionFormHandleSubmit(action: "create" | "edit") {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.transactions.selectedId);

  switch (action) {
    case "create":
      return async (data: TransactionData) => {
        await dispatch(addTransaction(data));
        dispatch(setAddTransactionPopupState(false));
      };
    case "edit":
      if (!id) {
        return () => {};
      }
      return async (data: TransactionData) => {
        await dispatch(updateTransaction({ ...data, id }));
        dispatch(setEditTransactionPopupState(false));
      };
    default:
      return () => {};
  }
}

export default useTransactionFormHandleSubmit;
