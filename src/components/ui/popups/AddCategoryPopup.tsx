import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import CategoryFormContent from "../forms/categoryForm/CategoryFormContent";
import HeaderPopupTriggerButton from "../HeaderPopupTriggerButton";
import Popup from "../Popup";
import { setAddCategoryPopupState } from "@/features/store/slices/popupsSlice";

function AddCategoryPopup() {
  const { addCategory } = useAppSelector((state) => state.popups);
  const changeState = (value: boolean) =>
    dispatch(setAddCategoryPopupState(value));
  const dispatch = useAppDispatch();

  return (
    <Popup
      open={addCategory}
      onOpenChange={changeState}
      trigger={
        <HeaderPopupTriggerButton
          title="Add Category"
          onClick={() => dispatch(setAddCategoryPopupState(true))}
        />
      }
      title="Add Category"
      description=""
      content={<CategoryFormContent type="create" />}
    />
  );
}

export default AddCategoryPopup;
