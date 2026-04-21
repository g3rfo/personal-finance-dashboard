import { TransactionFormTypeContext } from "@/context/forms/formTypeContext";
import ErrorTransactionForm from "./ErrorTransactionForm";
import TransactionForm from "./TransactionForm";
import useTransactionFormContent from "@/hooks/transactionForm/useHasNoCategories";
import type { FormActionType } from "@/types/form.type";

interface TransactionFormContentProps {
  type: FormActionType;
}

function TransactionFormContent({ type }: TransactionFormContentProps) {
  const { hasNoCategories } = useTransactionFormContent();
  const Provider = TransactionFormTypeContext.Provider;

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
