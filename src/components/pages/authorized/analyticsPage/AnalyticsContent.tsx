import useAnalyticsContent from "@/hooks/analytics/useAnalyticsContent";
import ExpensesByCategory from "./pieCharts/ExpensesByCategory";
import IncomeByCategory from "./pieCharts/IncomeByCategory";
import AvgDailySpending from "./stats/AvgDailySpending";
import SavingRate from "./stats/SavingRate";
import TotalTransactions from "./stats/TotalTransactions";
import { AnalyticsContext } from "@/context/analyticsContext";
import TrendLineChartContent from "./periodCharts/trendLineChart/TrendLineChartContent";
import ComparisonBarChartContent from "./periodCharts/comparisonBarChart/ComparisonBarChartContent";

function AnalyticsContent() {
  const { analyticsData } = useAnalyticsContent();
  const Provider = AnalyticsContext.Provider;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-6">
        <SavingRate />
        <TotalTransactions />
        <AvgDailySpending />
      </div>
      <div className="flex flex-wrap gap-6">
        <ExpensesByCategory />
        <IncomeByCategory />
      </div>
      <Provider value={analyticsData}>
        <TrendLineChartContent />
        <ComparisonBarChartContent />
      </Provider>
    </div>
  );
}

export default AnalyticsContent;
