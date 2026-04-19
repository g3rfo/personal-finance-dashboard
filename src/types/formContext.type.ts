import type { AuthFormContext } from "@/context/authFormContext";
import type { CategoryFormContext } from "@/context/categoryFormContext";
import type { ProfileFormContext } from "@/context/profileFormContext";
import type { RegistrationFormContext } from "@/context/registrationFormContext";
import type { TransactionFormContext } from "@/context/transactionFormContext";

export type FormContextType =
  | typeof TransactionFormContext
  | typeof CategoryFormContext
  | typeof ProfileFormContext
  | typeof AuthFormContext
  | typeof RegistrationFormContext;
