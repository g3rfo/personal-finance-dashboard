import Stats from "./stats/Stats";
import BudgetOverview from "./budgetOverview/BudgetOverview";
import RecentTransactions from "./recentTransaction/RecentTransactions";
import PageLayout from "../PageLayout";
import AddTransactionPopup from "@/components/ui/popups/AddTransactionPopup";

function DashboardPage() {
  return (
    <PageLayout
      title="Dashboard"
      description="Welcome back! Here's your financial overview"
      popup={<AddTransactionPopup />}
      content={
        <>
          <Stats />
          <div className="flex flex-wrap gap-4">
            <BudgetOverview />
            <RecentTransactions />
          </div>
        </>
      }
    />
  );
}

export default DashboardPage;
