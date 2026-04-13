import useCategoriesContent from "@/hooks/categories/useCategoriesContent";
import { CategoriesContext } from "@/context/categoryContext";
import CategoryContent from "./CategoryContent";
import EditCategoryPopup from "@/components/ui/popups/EditCategoryPopup";

function CategoriesContent() {
  const contextValue = useCategoriesContent();
  const Provider = CategoriesContext.Provider;

  return (
    <Provider value={contextValue}>
      <EditCategoryPopup />
      <div className="flex flex-col gap-4 min-w-135">
        <CategoryContent title="Income categories" type="income" />
        <CategoryContent title="Expenses categories" type="expense" />
      </div>
    </Provider>
  );
}

export default CategoriesContent;
