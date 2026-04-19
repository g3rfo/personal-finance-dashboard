import { useContext } from "react";
import PieChartComponent from "../PieChartComponent";
import { AnalyticsContext } from "@/context/analyticsContext";
import useExpenseCategoriesPieChartConfig from "@/hooks/analytics/useExpenseCategoriesPieChartConfig";
import useExpenseCategoriesPieChartData from "@/hooks/analytics/useExpenseCategoriesPieChartData";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

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
    return <Empty message="No expense data available" />;
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
