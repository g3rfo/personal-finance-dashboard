import useBudgetOverview from "@/hooks/useBudgetOverview";
import CategoryCard from "./CategoryCard";
import { CATEGORY_ICONS } from "@/constants/categoryIcons";
import { CATEGORY_COLORS } from "@/constants/categoryColors";

function BudgetOverviewCategoriesList() {
  const { categories, spentByCategories } = useBudgetOverview();

  return categories.map((category) => (
    <CategoryCard
      key={category.id}
      id={category.id}
      name={category.name}
      type={category.type}
      spent={spentByCategories[category.name] || 0}
      budget={category.budget}
      icon={CATEGORY_ICONS[category.iconName]}
      color={CATEGORY_COLORS[category.color]}
    />
  ));
}

export default BudgetOverviewCategoriesList;
