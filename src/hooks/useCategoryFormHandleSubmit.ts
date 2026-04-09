import {
  addCategory,
  updateCategory,
} from "@/features/store/asyncThunks/categoriesThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import type { CategoryFormData } from "@/types/category.type";

function useCategoryFormHandleSubmit(action: "create" | "edit") {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.categories.selectedId);

  switch (action) {
    case "create":
      return (data: CategoryFormData) => {
        return dispatch(addCategory(data));
      };
    case "edit":
      if (!id) {
        return () => {};
      }
      return (data: CategoryFormData) => {
        return dispatch(updateCategory({ ...data, id }));
      };
    default:
      return () => {};
  }
}

export default useCategoryFormHandleSubmit;
