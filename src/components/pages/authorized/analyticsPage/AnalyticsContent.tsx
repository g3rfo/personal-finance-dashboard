import useAnalyticsContent from "@/hooks/analytics/useAnalyticsContent";
import AvgDailySpending from "./stats/AvgDailySpending";
import SavingRate from "./stats/SavingRate";
import TotalTransactions from "./stats/TotalTransactions";
import { AnalyticsContext } from "@/context/analyticsContext";
import TrendLineChartCard from "./periodCharts/trendLineChart/TrendLineChartCard";
import ComparisonBarChartCard from "./periodCharts/comparisonBarChart/ComparisonBarChartCard";
import IncomeByCategory from "./pieCharts/incomeByCategory/IncomeByCategory";
import ExpensesByCategory from "./pieCharts/expensesByCategory/ExpensesByCategory";

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
      <Provider value={analyticsData}>
        <div className="flex flex-wrap gap-6">
          <ExpensesByCategory />
          <IncomeByCategory />
        </div>
        <TrendLineChartCard />
        <ComparisonBarChartCard />
      </Provider>
    </div>
  );
}

export default AnalyticsContent;
