import type useTransactionForm from "@/hooks/transactionForm/useTransactionForm";
import DialogCloseButton from "../../custom/DialogCloseButton";
import { Field } from "../../field";
import SubmitButton from "../../custom/SubmitButton";
import { TransactionFormContext } from "@/context/forms/transactionFormContext";
import { useContext } from "react";

function FormHandleButtons() {
  const { pending, formSubmitButtonMessage } = useContext(
    TransactionFormContext,
  ) as ReturnType<typeof useTransactionForm>;

  return (
    <Field orientation="horizontal">
      <DialogCloseButton type="button" />
      <SubmitButton pending={pending} title={formSubmitButtonMessage} />
    </Field>
  );
}

export default FormHandleButtons;
