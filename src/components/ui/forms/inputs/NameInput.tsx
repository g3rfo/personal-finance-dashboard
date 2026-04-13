import { TransactionFormContext } from "@/context/transactionFormContext";
import { Input } from "../../input";
import InputCard from "./InputCard";
import { useContext } from "react";
import { CategoryFormContext } from "@/context/categoryFormContext";
import type { FieldValues, UseFormRegister } from "react-hook-form";

interface NameInputProps {
  placeholder: string;
  context: typeof TransactionFormContext | typeof CategoryFormContext;
}

function NameInput({ context, placeholder }: NameInputProps) {
  const { register } = useContext(
    context as React.Context<{ register: UseFormRegister<FieldValues> } | null>,
  ) as {
    register: UseFormRegister<FieldValues>;
  };

  return (
    <InputCard
      label="Name"
      context={context}
      children={
        <Input
          id="name"
          type="text"
          autoComplete="on"
          placeholder={placeholder}
          {...register("name", {
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
