import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import { AnalyticsContext } from "@/context/analyticsContext";
import { useContext } from "react";
import ComparisonBarChart from "./ComparisonBarChart";

function ComparisonBarChartContent() {
  const { loading, error } = useContext(AnalyticsContext);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Error message="Failed to load comparison bar chart data. Please try again later." />
    );
  }

  return <ComparisonBarChart />;
}

export default ComparisonBarChartContent;
