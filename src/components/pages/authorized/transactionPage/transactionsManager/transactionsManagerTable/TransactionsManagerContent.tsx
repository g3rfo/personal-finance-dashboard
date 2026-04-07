import useManagerContent from "@/hooks/useManagerContent";
import EmptyTransactions from "./EmptyTransactions";
import TransactionsList from "./TransactionsList";
import { TransactionManagerContext } from "@/context/transactionManagerContext";
import EditTransactionsPopup from "@/components/ui/popups/EditTransactionPopup";

function TransactionsManagerContent() {
  const TransactionManagerContextValue = useManagerContent();

  const Provider = TransactionManagerContext.Provider;

  if (TransactionManagerContextValue.transactionsLength === 0)
    return <EmptyTransactions />;

  return (
    <Provider value={TransactionManagerContextValue}>
      <EditTransactionsPopup
        isPopupOpen={TransactionManagerContextValue.isPopupOpen}
        setIsPopupOpen={TransactionManagerContextValue.setIsPopupOpen}
      />
      <TransactionsList />
    </Provider>
  );
}

export default TransactionsManagerContent;
