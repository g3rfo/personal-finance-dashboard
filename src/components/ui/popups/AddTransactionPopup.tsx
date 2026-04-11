import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import TransactionFormContent from "../forms/transactionForm/TransactionFormContent";
import HeaderPopupTriggerButton from "../HeaderPopupTriggerButton";
import Popup from "../Popup";
import { setAddTransactionPopupState } from "@/features/store/slices/popupsSlice";

function AddTransactionPopup() {
  const { addTransaction } = useAppSelector((state) => state.popups);
  const dispatch = useAppDispatch();

  return (
    <Popup
      open={addTransaction}
      trigger={
        <HeaderPopupTriggerButton
          title="Add Transaction"
          onClick={() => dispatch(setAddTransactionPopupState(true))}
        />
      }
      title="Add Transaction"
      description=""
      content={<TransactionFormContent type="create" />}
    />
  );
}

export default AddTransactionPopup;
