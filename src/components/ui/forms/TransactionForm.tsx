import { Field, FieldSeparator } from "@/components/ui/field";
import useTransactionForm from "@/hooks/useTransactionForm";
import NameInput from "./inputs/NameInput";
import AmountInput from "./inputs/AmountInput";
import TypeInput from "./inputs/TypeInput";
import CategoryInput from "./inputs/CategoryInput";
import DateInput from "./inputs/DateInput";
import FormHandleButtons from "./FormHandleButtons";
import { TransactionFormContext } from "@/context/transactionFormContext";

function TransactionForm() {
  const contextValue = useTransactionForm();
  const Provider = TransactionFormContext.Provider;
  
  return (
    <Provider value={contextValue}>
      <form onSubmit={contextValue.handleFormSubmit} className="space-y-6">
        <FieldSeparator />
        <NameInput />
        <AmountInput />
        <Field orientation="horizontal">
          <TypeInput />
          <CategoryInput />
        </Field>
        <DateInput />
        <FormHandleButtons />
      </form>
    </Provider>
  );
}

export default TransactionForm;
