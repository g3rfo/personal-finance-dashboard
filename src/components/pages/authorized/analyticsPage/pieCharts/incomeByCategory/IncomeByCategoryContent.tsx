import { useContext } from "react";
import PieChartComponent from "../PieChartComponent";
import { AnalyticsContext } from "@/context/analyticsContext";
import Loading from "@/components/ui/custom/Loading";
import Error from "@/components/ui/custom/Error";
import useIncomeCategoriesPieChartData from "@/hooks/analytics/useIncomeCategoriesPieChartData";
import useIncomeCategoriesPieChartConfig from "@/hooks/analytics/useIncomeCategoriesPieChartConfig";
import Empty from "@/components/ui/custom/Empty";

function IncomeByCategoryContent() {
  const { loading, error } = useContext(AnalyticsContext);
  const chartConfig = useIncomeCategoriesPieChartConfig();
  const { chartData, totalIncome } = useIncomeCategoriesPieChartData();

  if (error) {
    return (
      <Error message="Failed to load income chart data. Please try again later." />
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (chartData.length === 0) {
    return <Empty message="No income data available" />;
  }

  return (
    <PieChartComponent
      chartConfig={chartConfig}
      chartData={chartData}
      totalAmount={totalIncome}
    />
  );
}

export default IncomeByCategoryContent;
