import type { AuthFormContext } from "@/context/forms/authFormContext";
import type { CategoryFormContext } from "@/context/forms/categoryFormContext";
import type { ProfileFormContext } from "@/context/forms/profileFormContext";
import type { RegistrationFormContext } from "@/context/forms/registrationFormContext";
import type { TransactionFormContext } from "@/context/forms/transactionFormContext";

export type FormContextType =
  | typeof TransactionFormContext
  | typeof CategoryFormContext
  | typeof ProfileFormContext
  | typeof AuthFormContext
  | typeof RegistrationFormContext;
