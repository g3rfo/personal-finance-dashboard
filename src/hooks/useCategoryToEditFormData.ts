import { useAppSelector } from "@/features/store/hooks";
import { selectCategoriesDataToEdit } from "@/features/store/selectors/categoriesSelectors";
import type { CategoryFormData } from "@/types/category.type";

function useCategoryToEditFormData() {
  const categoryId = useAppSelector((state) => state.categories.selectedId);

  const categoryDataToEdit = useAppSelector(
    selectCategoriesDataToEdit(categoryId || ""),
  );

  if (!categoryDataToEdit) return categoryDataToEdit;

  const { id, ...categoryFormData } = categoryDataToEdit;

  if (id !== categoryId) return null;

  return categoryFormData as CategoryFormData;
}

export default useCategoryToEditFormData;
