import EmptyTransactions from "./EmptyTransactions";
import TransactionsList from "./TransactionsList";
import { TransactionManagerContext } from "@/context/transactionManagerContext";
import EditTransactionsPopup from "@/components/ui/popups/EditTransactionPopup";
import { useContext } from "react";

function TransactionsManagerContent() {
  const transactionManagerContextValue = useContext(TransactionManagerContext);

  if (!transactionManagerContextValue) {
    return null;
  }

  if (transactionManagerContextValue.transactionsLength === 0)
    return <EmptyTransactions />;

  return (
    <>
      <EditTransactionsPopup />
      <TransactionsList />
    </>
  );
}

export default TransactionsManagerContent;
