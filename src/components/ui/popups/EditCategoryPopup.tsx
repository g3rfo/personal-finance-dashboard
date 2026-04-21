import { useAppSelector } from "@/features/store/hooks";
import CategoryFormContent from "../forms/categoryForm/CategoryFormContent";
import Popup from "../custom/Popup";

function EditCategoryPopup() {
  const { editCategory } = useAppSelector((state) => state.popups);

  return (
    <Popup
      open={editCategory}
      title="Edit Category"
      content={<CategoryFormContent type="edit" />}
    />
  );
}

export default EditCategoryPopup;
