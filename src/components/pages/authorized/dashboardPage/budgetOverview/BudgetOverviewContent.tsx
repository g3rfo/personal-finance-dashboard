import BudgetOverviewEmptyCategories from "./BudgetOverviewEmptyCategories";
import BudgetOverviewCategoriesList from "./BudgetOverviewCategoriesList";
import { useContext } from "react";
import { BudgetOverviewContext } from "@/context/budgetOverviewContext";

function BudgetOverviewContent() {
  const { categoriesLength } = useContext(BudgetOverviewContext) || {};

  if (categoriesLength === 0) {
    return <BudgetOverviewEmptyCategories />;
  }

  return <BudgetOverviewCategoriesList />;
}

export default BudgetOverviewContent;
