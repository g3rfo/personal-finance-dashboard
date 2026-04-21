import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import TransactionFormContent from "../forms/transactionForm/TransactionFormContent";
import IconFirstButton from "../custom/IconFirstButton";
import Popup from "../custom/Popup";
import { setAddTransactionPopupState } from "@/features/store/slices/popupsSlice";

function AddTransactionPopup() {
  const { addTransaction } = useAppSelector((state) => state.popups);
  const dispatch = useAppDispatch();

  return (
    <Popup
      open={addTransaction}
      trigger={
        <IconFirstButton
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
