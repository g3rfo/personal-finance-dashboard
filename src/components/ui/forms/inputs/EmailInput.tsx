import type { FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "../../input";
import InputCard from "./InputCard";
import type { FormContextType } from "@/types/formContext.type";
import useFormRegister from "@/hooks/useFormRegister";

interface EmailInputProps {
  context: FormContextType;
}

function EmailInput({ context }: EmailInputProps) {
  const register = useFormRegister(
    context as React.Context<{ register: UseFormRegister<FieldValues> } | null>,
  );

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
