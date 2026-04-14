import useRecentTransactions from "@/hooks/dashboard/useRecentTransactions";
import RecentEmptyTransactions from "./RecentEmptyTransactions";
import RecentTransactionsList from "./RecentTransactionsList";

function RecentTransactionsContent() {
  const { transactionsLength } = useRecentTransactions();

  if (transactionsLength === 0) {
    return <RecentEmptyTransactions />;
  }

  return <RecentTransactionsList />;
}

export default RecentTransactionsContent;
