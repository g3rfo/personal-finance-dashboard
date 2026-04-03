import PageHeader from "../header/PageHeader";
import { IconPlus } from "@tabler/icons-react";
import HeaderTitle from "../header/HeaderTitle";
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
import type { TransactionFormType } from "@/types/transaction.type";

function DashboardPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTransactions(1));
    dispatch(fetchMonthlyTransactions());
  }, []);

  const type: TransactionFormType = "create";

  return (
    <>
      <PageHeader>
        <HeaderTitle
          title="Dashboard"
          description="Welcome back! Here's your financial overview"
        />
        <Popup
          trigger={
            <Button>
              <IconPlus /> Add Transaction
            </Button>
          }
          title="Add Transaction"
          description=""
          content={<TransactionFormContent type={type} />}
        />
      </PageHeader>
      <Stats />
      <div className="flex flex-wrap gap-4">
        <BudgetOverview />
        <RecentTransactions />
      </div>
    </>
  );
}

export default DashboardPage;
