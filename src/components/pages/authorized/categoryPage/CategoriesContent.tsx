import useCategoriesContent from "@/hooks/useCategoriesContent";
import { CategoriesContext } from "@/context/categoriesContext";
import CategoryContent from "./CategoryContent";

function CategoriesContent() {
  const categoriesContextValue = useCategoriesContent();
  const Provider = CategoriesContext.Provider;

  return (
    <Provider value={categoriesContextValue}>
      <div className="flex flex-col gap-4">
        <CategoryContent
          title="Income categories"
          type="income"
        />
        <CategoryContent
          title="Expenses categories"
          type="expense"
        />
      </div>
    </Provider>
  );
}

export default CategoriesContent;
