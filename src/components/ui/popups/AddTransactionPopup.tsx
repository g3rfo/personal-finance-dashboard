import TransactionFormContent from "../forms/TransactionFormContent";
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
