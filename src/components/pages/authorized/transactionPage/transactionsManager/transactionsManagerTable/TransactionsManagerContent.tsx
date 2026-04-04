import useManagerContent from "@/hooks/useManagerContent";
import EmptyTransactions from "./EmptyTransactions";
import TransactionsList from "./TransactionsList";
import Popup from "@/components/ui/Popup";
import TransactionFormContent from "@/components/ui/forms/TransactionFormContent";
import { TransactionManagerContext } from "@/context/transactionManagerContext";

function TransactionsManagerContent() {
  const TransactionManagerContextValue = useManagerContent();

  const Provider = TransactionManagerContext.Provider;

  if (TransactionManagerContextValue.transactionsLength === 0)
    return <EmptyTransactions />;

  return (
    <Provider value={TransactionManagerContextValue}>
      <Popup
        open={TransactionManagerContextValue.isPopupOpen}
        onOpenChange={TransactionManagerContextValue.setIsPopupOpen}
        title="Edit Transaction"
        content={<TransactionFormContent type="edit" />}
      />
      <TransactionsList />
    </Provider>
  );
}

export default TransactionsManagerContent;
