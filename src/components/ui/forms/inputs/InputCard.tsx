import { Field, FieldLabel } from "../../field";
import InputError from "./InputError";
import { useContext } from "react";
import type { FieldErrors, FieldValues } from "react-hook-form";
import type { TransactionFormContext } from "@/context/transactionFormContext";
import type { CategoryFormContext } from "@/context/categoryFormContext";

interface InputCardProps {
  label: string;
  children: React.ReactNode;
  context: typeof TransactionFormContext | typeof CategoryFormContext;
}

function InputCard({ label, children, context }: InputCardProps) {
  const { errors } = useContext(
    context as React.Context<{ errors: FieldErrors<FieldValues> } | null>,
  ) as {
    errors: FieldErrors<FieldValues>;
  };

  const errorKey = label.toLowerCase() as keyof typeof errors;
  const rawError = errors[errorKey];
  const errorMessage =
    typeof rawError?.message === "string" ? rawError.message : undefined;

  return (
    <Field>
      <FieldLabel htmlFor={label.toLowerCase()}>{label}</FieldLabel>
      {children}
      <InputError error={errorMessage} />
    </Field>
  );
}

export default InputCard;
