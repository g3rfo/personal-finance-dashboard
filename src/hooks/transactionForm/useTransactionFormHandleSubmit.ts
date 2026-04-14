import {
  addTransaction,
  updateTransaction,
} from "@/features/store/asyncThunks/transactionsThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import { selectTransactionsDataToEdit } from "@/features/store/selectors/transactionsSelectors";
import {
  updateValueOnTransactionAdd,
  updateValueOnTransactionEdit,
} from "@/features/store/slices/analyticsDataSlice";
import {
  setAddTransactionPopupState,
  setEditTransactionPopupState,
} from "@/features/store/slices/popupsSlice";
import type { TransactionData } from "@/types/transaction.type";

function useTransactionFormHandleSubmit(action: "create" | "edit") {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.transactions.selectedId);
  const transaction = useAppSelector(selectTransactionsDataToEdit(id ?? ""));

  switch (action) {
    case "create":
      return async (data: TransactionData) => {
        await dispatch(addTransaction(data));
        dispatch(setAddTransactionPopupState(false));
        dispatch(updateValueOnTransactionAdd(data));
      };
    case "edit":
      if (!id) {
        return () => {};
      }
      return async (data: TransactionData) => {
        await dispatch(updateTransaction({ ...data, id }));
        dispatch(setEditTransactionPopupState(false));
        if (transaction) {
          dispatch(
            updateValueOnTransactionEdit({
              oldTransaction: transaction,
              newTransaction: data,
            }),
          );
        }
      };
    default:
      return () => {};
  }
}

export default useTransactionFormHandleSubmit;
