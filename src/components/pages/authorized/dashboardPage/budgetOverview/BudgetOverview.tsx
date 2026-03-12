import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Category from "./Category";
import { CATEGORY_ICONS } from "@/constants/categoryIcons";
import { CATEGORY_COLORS } from "@/constants/categoryColors";
import { useAppSelector } from "@/features/store/hooks";

function BudgetOverview() {
  const { categories, loading, error } = useAppSelector((state) => state.categories);

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
            spent={400}
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