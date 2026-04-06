import { TransactionFormContext } from "@/context/transactionFormContext";
import { Field, FieldLabel } from "../../field";
import InputError from "./InputError";
import { useContext } from "react";
import type useTransactionForm from "@/hooks/useTransactionForm";

interface InputCardProps {
  label: string;
  children: React.ReactNode;
}

function InputCard({ label, children }: InputCardProps) {
  const { errors } = useContext(TransactionFormContext) as ReturnType<
    typeof useTransactionForm
  >;

  const errorKey = label.toLowerCase() as keyof typeof errors;
  const errorMessage = errors[errorKey]?.message;

  return (
    <Field>
      <FieldLabel htmlFor={label.toLowerCase()}>{label}</FieldLabel>
      {children}
      <InputError error={errorMessage} />
    </Field>
  );
}

export default InputCard;
