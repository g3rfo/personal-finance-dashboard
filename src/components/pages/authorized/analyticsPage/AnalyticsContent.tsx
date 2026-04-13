import SavingRate from "./stats/SavingRate";
import TotalTransactions from "./stats/TotalTransactions";

function AnalyticsContent() {
  return (
    <>
      <SavingRate />
      <TotalTransactions />
    </>
  );
}

export default AnalyticsContent;