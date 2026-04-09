import CategoryFormContent from "../forms/categoryForm/CategoryFormContent";
import Popup from "../Popup";

interface EditCategoryPopupProps {
  isPopupOpen: boolean;
  setIsPopupOpen: (isOpen: boolean) => void;
}

function EditCategoryPopup({
  isPopupOpen,
  setIsPopupOpen,
}: EditCategoryPopupProps) {
  return (
    <Popup
      open={isPopupOpen}
      onOpenChange={setIsPopupOpen}
      title="Edit Category"
      content={<CategoryFormContent type="edit" />}
    />
  );
}

export default EditCategoryPopup;
