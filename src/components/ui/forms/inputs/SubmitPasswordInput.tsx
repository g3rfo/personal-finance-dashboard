import useFormRegister from "@/hooks/useFormRegister";
import type { FormContextType } from "@/types/formContext.type";
import type { FieldValues, UseFormRegister } from "react-hook-form";
import InputCard from "./InputCard";
import { Input } from "../../input";

interface ConfirmPasswordInputProps {
  context: FormContextType;
}

function ConfirmPasswordInput({ context }: ConfirmPasswordInputProps) {
  const register = useFormRegister(
    context as React.Context<{ register: UseFormRegister<FieldValues> } | null>,
  );

  return (
    <InputCard
      label={"Confirm Password"}
      context={context}
      children={
        <Input
          id="confirmPassword"
          type="password"
          autoComplete="on"
          placeholder="Enter your password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "Confirm Password must contain letters and numbers",
            },
            minLength: {
              value: 8,
              message: "Confirm Password must be at least 8 characters",
            },
          })}
          className="focus-visible:border-none focus-visible:ring-3 focus-visible:ring-primary"
        />
      }
    />
  );
}

export default ConfirmPasswordInput;
