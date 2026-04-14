import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import { AnalyticsContext } from "@/context/analyticsContext";
import { useContext } from "react";
import TrendLineChart from "./TrendLineChart";

function TrendLineChartContent() {
  const { loading, error } = useContext(AnalyticsContext);

  if (error) {
    return (
      <Error message="Failed to load trend line chart data. Please try again later." />
    );
  }

  if (loading) {
    return <Loading />;
  }

  return <TrendLineChart />;
}

export default TrendLineChartContent;
