import type useTransactionForm from "@/hooks/useTransactionForm";
import DialogCloseButton from "../DialogCloseButton";
import { Field } from "../field";
import SubmitButton from "../SubmitButton";
import { TransactionFormContext } from "@/hooks/useTransactionForm";
import { useContext } from "react";

function FormHandleButtons() {
  const { pending } = useContext(TransactionFormContext) as ReturnType<
    typeof useTransactionForm
  >;

  return (
    <Field orientation="horizontal">
      <DialogCloseButton />
      <SubmitButton pending={pending} title="Add Transaction" />
    </Field>
  );
}

export default FormHandleButtons;
