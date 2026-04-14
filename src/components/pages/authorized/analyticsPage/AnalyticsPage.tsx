import PageLayout from "../PageLayout";
import AnalyticsContent from "./AnalyticsContent";

function AnalyticsPage() {
  return (
    <PageLayout
      title="Analytics"
      description="Visualize your financial data and trends"
      content={<AnalyticsContent />}
    />
  );
}

export default AnalyticsPage;
