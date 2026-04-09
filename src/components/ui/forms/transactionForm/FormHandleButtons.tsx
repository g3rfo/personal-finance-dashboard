import type useTransactionForm from "@/hooks/useTransactionForm";
import DialogCloseButton from "../../DialogCloseButton";
import { Field } from "../../field";
import SubmitButton from "../../SubmitButton";
import { TransactionFormContext } from "@/context/transactionFormContext";
import { useContext } from "react";

function FormHandleButtons() {
  const { pending, formSubmitButtonMessage } = useContext(
    TransactionFormContext,
  ) as ReturnType<typeof useTransactionForm>;

  return (
    <Field orientation="horizontal">
      <DialogCloseButton />
      <SubmitButton pending={pending} title={formSubmitButtonMessage} />
    </Field>
  );
}

export default FormHandleButtons;
