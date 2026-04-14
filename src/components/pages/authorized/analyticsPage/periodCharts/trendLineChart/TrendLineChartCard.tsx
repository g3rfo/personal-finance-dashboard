import PeriodChartCard from "../PeriodChartCard";
import TrendLineChart from "./TrendLineChart";

function TrendLineChartCard() {
  return (
    <PeriodChartCard
      title="6-Month Trend"
      content={<TrendLineChart />}
    />
  );
}

export default TrendLineChartCard;
