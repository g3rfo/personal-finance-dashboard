import { useAppSelector } from "@/features/store/hooks";
import { selectTransactionsDataToEdit } from "@/features/store/selectors/transactionsSelectors";
import type { TransactionData } from "@/types/transaction.type";

function useTransactionToEditFormData() {
  const transactionId = useAppSelector(
    (state) => state.transactions.selectedId,
  );

  const transactionDataToEdit = useAppSelector(
    selectTransactionsDataToEdit(transactionId || ""),
  );

  if (!transactionDataToEdit) return transactionDataToEdit;

  const { id, ...transactionFormData } = transactionDataToEdit;

  if (id !== transactionId) return null;

  return transactionFormData as TransactionData;
}

export default useTransactionToEditFormData;
