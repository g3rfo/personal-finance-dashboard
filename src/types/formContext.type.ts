import type { CategoryFormContext } from "@/context/categoryFormContext";
import type { ProfileFormContext } from "@/context/profileFormContext";
import type { TransactionFormContext } from "@/context/transactionFormContext";

export type FormContextType =
  | typeof TransactionFormContext
  | typeof CategoryFormContext
  | typeof ProfileFormContext;
