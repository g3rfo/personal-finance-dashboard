import {
  addCategory,
  updateCategory,
} from "@/features/store/asyncThunks/categoriesThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import {
  setAddCategoryPopupState,
  setEditCategoryPopupState,
} from "@/features/store/slices/popupsSlice";
import type { CategoryFormData } from "@/types/category.type";

function useCategoryFormHandleSubmit(action: "create" | "edit") {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.categories.selectedId);

  switch (action) {
    case "create":
      return async (data: CategoryFormData) => {
        await dispatch(addCategory(data));
        dispatch(setAddCategoryPopupState(false));
      };
    case "edit":
      if (!id) {
        return () => {};
      }
      return async (data: CategoryFormData) => {
        await dispatch(updateCategory({ ...data, id }));
        dispatch(setEditCategoryPopupState(false));
      };
    default:
      return () => {};
  }
}

export default useCategoryFormHandleSubmit;
