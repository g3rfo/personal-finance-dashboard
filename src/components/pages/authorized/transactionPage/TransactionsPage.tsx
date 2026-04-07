import TransactionsManager from "./transactionsManager/TransactionsManager";
import PageLayout from "../PageLayout";
import AddTransactionPopup from "@/components/ui/popups/AddTransactionPopup";

function TransactionsPage() {
  return (
    <PageLayout
      title="Transactions"
      description="Manage all your income and expenses"
      popup={<AddTransactionPopup />}
      content={<TransactionsManager />}
    />
  );
}

export default TransactionsPage;
