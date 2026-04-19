import RecentEmptyTransactions from "./RecentEmptyTransactions";
import RecentTransactionsList from "./RecentTransactionsList";
import { useContext } from "react";
import { RecentTransactionsContext } from "@/context/recentTransactionsContext";

function RecentTransactionsContent() {
  const { transactionsLength } = useContext(RecentTransactionsContext) || {};

  if (transactionsLength === 0) {
    return <RecentEmptyTransactions />;
  }

  return <RecentTransactionsList />;
}

export default RecentTransactionsContent;
