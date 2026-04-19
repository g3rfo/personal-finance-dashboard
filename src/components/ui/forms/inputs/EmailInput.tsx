import type { FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "../../input";
import InputCard from "./InputCard";
import { useContext } from "react";
import type { FormContextType } from "@/types/formContext.type";

interface EmailInputProps {
  context: FormContextType;
}

function EmailInput({ context }: EmailInputProps) {
  const { register } = useContext(
    context as React.Context<{ register: UseFormRegister<FieldValues> } | null>,
  ) as {
    register: UseFormRegister<FieldValues>;
  };

  return (
    <InputCard
      label={"Email"}
      context={context}
      children={
        <Input
          id="email"
          type="email"
          autoComplete="on"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          className="focus-visible:border-none focus-visible:ring-3 focus-visible:ring-primary"
        />
      }
    />
  );
}

export default EmailInput;
