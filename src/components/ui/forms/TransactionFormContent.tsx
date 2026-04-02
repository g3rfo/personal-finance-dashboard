import ErrorTransactionForm from "./ErrorTransactionForm";
import TransactionForm from "./TransactionForm";
import useTransactionFormContent from "@/hooks/useTransactionFormContent";

function TransactionFormContent() {
  const { hasNoCategories } = useTransactionFormContent();

  if (hasNoCategories) {
    return <ErrorTransactionForm />;
  }

  return <TransactionForm />;
}

export default TransactionFormContent;
