import CategoryFormContent from "../forms/categoryForm/CategoryFormContent";
import HeaderPopupTriggerButton from "../HeaderPopupTriggerButton";
import Popup from "../Popup";

function AddCategoryPopup() {
  return (
    <Popup
      trigger={<HeaderPopupTriggerButton title="Add Category" />}
      title="Add Category"
      description=""
      content={<CategoryFormContent type="create" />}
    />
  );
}

export default AddCategoryPopup;
