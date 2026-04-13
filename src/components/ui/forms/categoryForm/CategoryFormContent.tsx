import { CategoryFormTypeContext } from "@/context/formTypeContext";
import type { FormActionType } from "@/types/form.type";
import CategoryForm from "./CategoryForm";

interface CategoryFormContentProps {
  type: FormActionType;
}

function CategoryFormContent({ type }: CategoryFormContentProps) {
  const Provider = CategoryFormTypeContext.Provider;

  return (
    <Provider value={type}>
      <CategoryForm />
    </Provider>
  );
}

export default CategoryFormContent;
