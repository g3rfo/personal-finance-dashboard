import TransactionFormContent from "../forms/transactionForm/TransactionFormContent";
import HeaderPopupTriggerButton from "../HeaderPopupTriggerButton";
import Popup from "../Popup";

function AddTransactionPopup() {
  return (
    <Popup
      trigger={<HeaderPopupTriggerButton title="Add Transaction" />}
      title="Add Transaction"
      description=""
      content={<TransactionFormContent type="create" />}
    />
  );
}

export default AddTransactionPopup;
