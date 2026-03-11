import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Category from "./Category";
import { IconToolsKitchen2 } from "@tabler/icons-react";

const categoryIcons = {
  Food : IconToolsKitchen2,
};

function BudgetOverview() {
  return (
    <Card className="flex-1 min-w-135">
      <CardHeader>
        <CardTitle className="text-lg">Budget Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Category name="Housing" spent={1200} budget={2000} icon={categoryIcons["Food"]} color="#F59E0B" />
        <Category name="Transportation" spent={400} budget={1000} icon={categoryIcons["Food"]} color="#EF4444" />
        <Category name="Food" spent={500} budget={600} icon={categoryIcons["Food"]} color="#8B5CF6" />
      </CardContent>
    </Card>
  );
}

export default BudgetOverview;