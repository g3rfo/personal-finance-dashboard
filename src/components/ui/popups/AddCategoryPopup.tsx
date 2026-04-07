import HeaderPopupTriggerButton from "../HeaderPopupTriggerButton";
import Popup from "../Popup";

function AddCategoryPopup() {
  return (
    <Popup
      trigger={<HeaderPopupTriggerButton title="Add Category" />}
      title="Add Category"
      description=""
      content={null}
    />
  );
}

export default AddCategoryPopup;
