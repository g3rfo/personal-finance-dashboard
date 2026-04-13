import useIncomeCategoriesPieChartConfig from "@/hooks/useIncomeCategoriesPieChartConfig";
import PieChartCard from "./PieChartCard";
import useIncomeCategoriesPieChartData from "@/hooks/useIncomeCategoriesPieChartData";

function IncomeByCategory() {
  const chartConfig = useIncomeCategoriesPieChartConfig();
  const { chartData, totalIncome } = useIncomeCategoriesPieChartData();

  return (
    <PieChartCard
      title="Income by Category"
      chartConfig={chartConfig}
      chartData={chartData}
      totalAmount={totalIncome}
    />
  );
}

export default IncomeByCategory;
