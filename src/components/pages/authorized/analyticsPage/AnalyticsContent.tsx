import ExpensesByCategory from "./pieCharts/ExpensesByCategory";
import IncomeByCategory from "./pieCharts/IncomeByCategory";
import AvgDailySpending from "./stats/AvgDailySpending";
import SavingRate from "./stats/SavingRate";
import TotalTransactions from "./stats/TotalTransactions";

function AnalyticsContent() {
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
    </div>
  );
}

export default AnalyticsContent;
