import useExpenseCategoriesPieChartConfig from "@/hooks/useExpenseCategoriesPieChartConfig";
import PieChartCard from "./PieChartCard";
import useExpenseCategoriesPieChartData from "@/hooks/useExpenseCategoriesPieChartData";

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
