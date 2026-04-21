import type { FormContextType } from "@/types/formContext.type";
import type { FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "../../input";
import InputCard from "./InputCard";
import useFormRegister from "@/hooks/useFormRegister";

interface PasswordInputProps {
  context: FormContextType;
}

function PasswordInput({ context }: PasswordInputProps) {
  const register = useFormRegister(
    context as React.Context<{ register: UseFormRegister<FieldValues> } | null>,
  );

  return (
    <InputCard
      label={"Password"}
      context={context}
      children={
        <Input
          id="password"
          type="password"
          autoComplete="on"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "Password must contain letters and numbers",
            },
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          className="focus-visible:border-none focus-visible:ring-3 focus-visible:ring-primary"
        />
      }
    />
  );
}

export default PasswordInput;
