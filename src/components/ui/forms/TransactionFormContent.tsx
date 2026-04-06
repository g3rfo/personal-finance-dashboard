import ErrorTransactionForm from "./ErrorTransactionForm";
import TransactionForm from "./TransactionForm";
import useTransactionFormContent from "@/hooks/useTransactionFormContent";
import { FormTypeContext } from "@/context/transactionFormContext";
import type { TransactionFormType } from "@/types/transaction.type";

interface TransactionFormContentProps {
  type: TransactionFormType;
}

function TransactionFormContent({ type }: TransactionFormContentProps) {
  const { hasNoCategories } = useTransactionFormContent();
  const Provider = FormTypeContext.Provider;

  if (hasNoCategories) {
    return <ErrorTransactionForm />;
  }

  return (
    <Provider value={type}>
      <TransactionForm />
    </Provider>
  );
}

export default TransactionFormContent;
