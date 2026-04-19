import { useContext } from "react";
import PieChartComponent from "../PieChartComponent";
import { AnalyticsContext } from "@/context/analyticsContext";
import useExpenseCategoriesPieChartConfig from "@/hooks/analytics/useExpenseCategoriesPieChartConfig";
import useExpenseCategoriesPieChartData from "@/hooks/analytics/useExpenseCategoriesPieChartData";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";

function ExpensesByCategoryContent() {
  const { loading, error } = useContext(AnalyticsContext);
  const chartConfig = useExpenseCategoriesPieChartConfig();
  const { chartData, totalExpenses } = useExpenseCategoriesPieChartData();

  if (error) {
    return (
      <Error message="Failed to load expenses chart data. Please try again later." />
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (chartData.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        No expense data available
      </div>
    );
  }

  return (
    <PieChartComponent
      chartConfig={chartConfig}
      chartData={chartData}
      totalAmount={totalExpenses}
    />
  );
}

export default ExpensesByCategoryContent;
