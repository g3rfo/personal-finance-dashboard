import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CATEGORY_ICONS } from "@/constants/categoryIcons";
import { CATEGORY_COLORS } from "@/constants/categoryColors";
import { useAppSelector } from "@/features/store/hooks";
import { selectCategoriesNames } from "@/features/store/selectors/categoriesSelectors";
import { transactionsSumupByCategories } from "@/utils/transactionsSumupByCategories";
import CategoryCard from "./CategoryCard";
import { selectThisMonthTransactions } from "@/features/store/selectors/transactionsSelectors";

function BudgetOverview() {
  const { categories, loading, error } = useAppSelector(
    (state) => state.categories,
  );
  const categoriesNames = useAppSelector(selectCategoriesNames) || [];
  const transactions =
    useAppSelector(selectThisMonthTransactions) || [];
  const spentByCategories =
    transactionsSumupByCategories(transactions, categoriesNames) || {};

  return (
    <Card className="flex-1 min-w-135">
      <CardHeader>
        <CardTitle className="text-lg">Budget Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && categories?.length === 0 && (
          <p className="text-center">No categories found. Please add some.</p>
        )}
        {!loading &&
          !error &&
          categories?.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              type={category.type}
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
