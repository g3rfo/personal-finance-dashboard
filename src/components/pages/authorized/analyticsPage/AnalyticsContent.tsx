import AvgDailySpending from "./stats/AvgDailySpending";
import SavingRate from "./stats/SavingRate";
import TotalTransactions from "./stats/TotalTransactions";

function AnalyticsContent() {
  return (
    <>
      <div className="flex flex-wrap gap-6">
        <SavingRate />
        <TotalTransactions />
        <AvgDailySpending />
      </div>
    </>
  );
}

export default AnalyticsContent;