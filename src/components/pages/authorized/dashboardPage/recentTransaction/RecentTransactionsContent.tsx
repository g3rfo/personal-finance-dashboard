import RecentTransactionsList from "./RecentTransactionsList";
import { useContext } from "react";
import { RecentTransactionsContext } from "@/context/recentTransactionsContext";
import Empty from "@/components/ui/custom/Empty";

function RecentTransactionsContent() {
  const { transactionsLength } = useContext(RecentTransactionsContext) || {};

  if (transactionsLength === 0) {
    return <Empty message="No transactions yet" />;
  }

  return <RecentTransactionsList />;
}

export default RecentTransactionsContent;
