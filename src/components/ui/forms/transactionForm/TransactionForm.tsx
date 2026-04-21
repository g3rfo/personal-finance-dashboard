import { Field, FieldSeparator } from "@/components/ui/field";
import useTransactionForm from "@/hooks/transactionForm/useTransactionForm";
import AmountInput from "../inputs/AmountInput";
import ExistTypeInput from "../inputs/ExistTypeInput";
import CategoryInput from "../inputs/CategoryInput";
import DateInput from "../inputs/DateInput";
import FormHandleButtons from "./FormHandleButtons";
import { TransactionFormContext } from "@/context/forms/transactionFormContext";
import NameInput from "../inputs/NameInput";

function TransactionForm() {
  const contextValue = useTransactionForm();
  const Provider = TransactionFormContext.Provider;

  return (
    <Provider value={contextValue}>
      <form onSubmit={contextValue.handleFormSubmit} className="space-y-6">
        <FieldSeparator />
        <NameInput
          placeholder="Enter transaction name"
          context={TransactionFormContext}
        />
        <AmountInput />
        <Field orientation="horizontal">
          <ExistTypeInput />
          <CategoryInput />
        </Field>
        <DateInput />
        <FormHandleButtons />
      </form>
    </Provider>
  );
}

export default TransactionForm;
