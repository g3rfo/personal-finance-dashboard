import { useContext } from "react";
import type { FieldValues, UseFormRegister } from "react-hook-form";

function useFormRegister(context: React.Context<{ register: UseFormRegister<FieldValues> } | null>) {
  const { register } = useContext(context) as { register: UseFormRegister<FieldValues> };
  return register;
}

export default useFormRegister;