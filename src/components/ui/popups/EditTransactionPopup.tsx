import { useAppSelector } from "@/features/store/hooks";
import TransactionFormContent from "../forms/transactionForm/TransactionFormContent";
import Popup from "../custom/Popup";

function EditTransactionsPopup() {
  const { editTransaction } = useAppSelector((state) => state.popups);

  return (
    <Popup
      open={editTransaction}
      title="Edit Transaction"
      content={<TransactionFormContent type="edit" />}
    />
  );
}

export default EditTransactionsPopup;
