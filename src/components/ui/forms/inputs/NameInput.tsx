import { Input } from "../../input";
import InputCard from "./InputCard";
import type { FieldValues, UseFormRegister } from "react-hook-form";
import type { FormContextType } from "@/types/formContext.type";
import { stringToCamelCase } from "@/utils/stringToCamelCase";
import useFormRegister from "@/hooks/useFormRegister";

interface NameInputProps {
  label?: string;
  placeholder: string;
  context: FormContextType;
}

function NameInput({ context, placeholder, label }: NameInputProps) {
  const register = useFormRegister(
    context as React.Context<{ register: UseFormRegister<FieldValues> } | null>,
  );

  const formatedLabel = stringToCamelCase(label || "Name");

  return (
    <InputCard
      label={label || "Name"}
      context={context}
      children={
        <Input
          id={formatedLabel}
          type="text"
          autoComplete="on"
          placeholder={placeholder}
          {...register(formatedLabel, {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            maxLength: {
              value: 50,
              message: "Name must be at most 50 characters",
            },
          })}
          className="focus-visible:border-none focus-visible:ring-3 focus-visible:ring-primary"
        />
      }
    />
  );
}

export default NameInput;
