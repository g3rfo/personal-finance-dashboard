import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Category from "./Category";
import { CATEGORY_ICONS } from "@/constants/categoryIcons";
import { CATEGORY_COLORS } from "@/constants/categoryColors";
import { useAppSelector } from "@/features/store/hooks";
import { selectCategoriesNames } from "@/features/store/selectors/categoriesSelectors";
import { transactionsSumupByCategories } from "@/utils/transactionsSumupByCategories";

function BudgetOverview() {
  const { categories, loading, error } = useAppSelector((state) => state.categories);
  const categoriesNames = useAppSelector(selectCategoriesNames) || [];
  const transactions = useAppSelector((state) => state.transactions.transactions) || [];
  const spentByCategories = transactionsSumupByCategories(transactions, categoriesNames) || {};

  return (
    <Card className="flex-1 min-w-135">
      <CardHeader>
        <CardTitle className="text-lg">Budget Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && categories.map((category) => (
          <Category
            key={category.id}
            name={category.name}
            spent={spentByCategories[category.name] || 0}
            budget={category.budget}
            icon={CATEGORY_ICONS[category.iconName]}
            color={CATEGORY_COLORS[category.color]}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default BudgetOverview;