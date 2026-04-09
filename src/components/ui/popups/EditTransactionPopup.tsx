import TransactionFormContent from "../forms/transactionForm/TransactionFormContent";
import Popup from "../Popup";

interface EditTransactionsPopupProps {
  isPopupOpen: boolean;
  setIsPopupOpen: (isOpen: boolean) => void;
}

function EditTransactionsPopup({
  isPopupOpen,
  setIsPopupOpen,
}: EditTransactionsPopupProps) {
  return (
    <Popup
      open={isPopupOpen}
      onOpenChange={setIsPopupOpen}
      title="Edit Transaction"
      content={<TransactionFormContent type="edit" />}
    />
  );
}

export default EditTransactionsPopup;
