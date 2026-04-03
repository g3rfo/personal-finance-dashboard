import type useTransactionForm from "@/hooks/useTransactionForm";
import type { TransactionFormType } from "@/types/transaction.type";
import { createContext } from "react";

export const FormTypeContext = createContext<TransactionFormType>("create");

export const TransactionFormContext = createContext<ReturnType<
  typeof useTransactionForm
> | null>(null);
