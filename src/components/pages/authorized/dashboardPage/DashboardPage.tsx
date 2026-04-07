import { IconPlus } from "@tabler/icons-react";
import Stats from "./stats/Stats";
import BudgetOverview from "./budgetOverview/BudgetOverview";
import RecentTransactions from "./recentTransaction/RecentTransactions";
import Popup from "@/components/ui/Popup";
import { Button } from "@/components/ui/button";
import {
  fetchMonthlyTransactions,
  fetchTransactions,
} from "@/features/store/asyncThunks/transactionsThunks";
import { useEffect } from "react";
import { useAppDispatch } from "@/features/store/hooks";
import TransactionFormContent from "@/components/ui/forms/TransactionFormContent";
import PageLayout from "../PageLayout";

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
      popup={
        <Popup
          trigger={
            <Button>
              <IconPlus /> Add Transaction
            </Button>
          }
          title="Add Transaction"
          content={<TransactionFormContent type="create" />}
        />
      }
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
