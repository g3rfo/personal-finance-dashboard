import useBudgetOverview from "@/hooks/useBudgetOverview";
import BudgetOverviewEmptyCategories from "./BudgetOverviewEmptyCategories";
import BudgetOverviewCategoriesList from "./BudgetOverviewCategoriesList";

function BudgetOverviewContent() {
  const { categoriesLength } = useBudgetOverview();

  if (categoriesLength === 0) {
    return <BudgetOverviewEmptyCategories />;
  }

  return <BudgetOverviewCategoriesList />;
}

export default BudgetOverviewContent;
