import BudgetOverviewCategoriesList from "./BudgetOverviewCategoriesList";
import { useContext } from "react";
import { BudgetOverviewContext } from "@/context/budgetOverviewContext";
import Empty from "@/components/ui/custom/Empty";

function BudgetOverviewContent() {
  const { categoriesLength } = useContext(BudgetOverviewContext) || {};

  if (categoriesLength === 0) {
    return <Empty message="No categories found. Please add some" />;
  }

  return <BudgetOverviewCategoriesList />;
}

export default BudgetOverviewContent;
