import type useTransactionForm from "@/hooks/useTransactionForm";
import { createContext } from "react";

export const TransactionFormContext = createContext<ReturnType<
  typeof useTransactionForm
> | null>(null);
