import useCategoriesContent from "@/hooks/useCategoriesContent";
import { CategoriesContext } from "@/context/categoriesContext";
import CategoryContent from "./CategoryContent";
import CategoriesList from "./CategoriesList";

function CategoriesContent() {
  const categoriesContextValue = useCategoriesContent();
  const Provider = CategoriesContext.Provider;

  return (
    <Provider value={categoriesContextValue}>
      <div className="flex flex-col gap-4 min-w-135">
        <CategoryContent title="Income categories" type="income">
          <CategoriesList type="income" />
        </CategoryContent>
        <CategoryContent title="Expenses categories" type="expense">
          <CategoriesList type="expense" />
        </CategoryContent>
      </div>
    </Provider>
  );
}

export default CategoriesContent;
