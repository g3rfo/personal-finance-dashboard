import Stats from "./stats/Stats";
import BudgetOverview from "./budgetOverview/BudgetOverview";
import RecentTransactions from "./recentTransaction/RecentTransactions";
import {
  fetchMonthlyTransactions,
  fetchTransactions,
} from "@/features/store/asyncThunks/transactionsThunks";
import { useEffect } from "react";
import { useAppDispatch } from "@/features/store/hooks";
import PageLayout from "../PageLayout";
import AddTransactionPopup from "@/components/ui/popups/AddTransactionPopup";

function DashboardPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTransactions(1));
    dispatch(fetchMonthlyTransactions());
  }, []);

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
