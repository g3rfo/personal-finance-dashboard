import useManagerContent from "@/hooks/useManagerContent";
import EmptyTransactions from "./EmptyTransactions";
import TransactionsList from "./TransactionsList";

function TransactionsManagerContent() {
  const { transactionsLength } = useManagerContent();

  if (transactionsLength === 0) return <EmptyTransactions />;

  return <TransactionsList />;
}

export default TransactionsManagerContent;
