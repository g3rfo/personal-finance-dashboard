import { useContext } from "react";
import PieChartComponent from "../PieChartComponent";
import { AnalyticsContext } from "@/context/analyticsContext";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import useIncomeCategoriesPieChartData from "@/hooks/analytics/useIncomeCategoriesPieChartData";
import useIncomeCategoriesPieChartConfig from "@/hooks/analytics/useIncomeCategoriesPieChartConfig";

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

  return (
    <PieChartComponent
      chartConfig={chartConfig}
      chartData={chartData}
      totalAmount={totalIncome}
    />
  );
}

export default IncomeByCategoryContent;
