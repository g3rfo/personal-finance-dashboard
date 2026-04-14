import PeriodChartCard from "../PeriodChartCard";
import ComparisonBarChartContent from "./ComparisonBarChartContent";

function ComparisonBarChartCard() {
  return (
    <PeriodChartCard
      title="Monthly Comparison"
      content={<ComparisonBarChartContent />}
    />
  );
}

export default ComparisonBarChartCard;
