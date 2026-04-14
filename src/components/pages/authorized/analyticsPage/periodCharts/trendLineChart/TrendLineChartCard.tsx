import PeriodChartCard from "../PeriodChartCard";
import TrendLineChartContent from "./TrendLineChartContent";

function TrendLineChartCard() {
  return (
    <PeriodChartCard
      title="6-Month Trend"
      content={<TrendLineChartContent />}
    />
  );
}

export default TrendLineChartCard;
