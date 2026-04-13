import useExpenseCategoriesPieChartConfig from "@/hooks/analytics/useExpenseCategoriesPieChartConfig";
import PieChartCard from "./PieChartCard";
import useExpenseCategoriesPieChartData from "@/hooks/analytics/useExpenseCategoriesPieChartData";

function ExpensesByCategory() {
  const chartConfig = useExpenseCategoriesPieChartConfig();
  const { chartData, totalExpenses } = useExpenseCategoriesPieChartData();

  return (
    <PieChartCard
      title="Expenses by Category"
      chartConfig={chartConfig}
      chartData={chartData}
      totalAmount={totalExpenses}
    />
  );
}

export default ExpensesByCategory;
