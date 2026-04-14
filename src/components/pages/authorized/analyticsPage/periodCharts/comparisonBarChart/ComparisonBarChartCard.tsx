import PeriodChartCard from "../PeriodChartCard";
import ComparisonBarChart from "./ComparisonBarChart";

function ComparisonBarChartCard() {
  return (
    <PeriodChartCard
      title="Monthly Comparison"
      content={<ComparisonBarChart />}
    />
  );
}

export default ComparisonBarChartCard;