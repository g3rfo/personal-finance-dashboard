import { Field, FieldLabel } from "../../field";
import InputError from "./InputError";
import { useContext } from "react";
import type { FieldErrors, FieldValues } from "react-hook-form";
import type { FormContextType } from "@/types/formContext.type";
import { stringToCamelCase } from "@/utils/stringToCamelCase";

interface InputCardProps {
  label: string;
  children: React.ReactNode;
  context: FormContextType;
}

function InputCard({ label, children, context }: InputCardProps) {
  const { errors } = useContext(
    context as React.Context<{ errors: FieldErrors<FieldValues> } | null>,
  ) as {
    errors: FieldErrors<FieldValues>;
  };

  const errorKey = stringToCamelCase(label) as keyof typeof errors;
  const rawError = errors[errorKey];
  const errorMessage =
    typeof rawError?.message === "string" ? rawError.message : undefined;

  return (
    <Field>
      <FieldLabel htmlFor={stringToCamelCase(label)}>{label}</FieldLabel>
      {children}
      <InputError error={errorMessage} />
    </Field>
  );
}

export default InputCard;
