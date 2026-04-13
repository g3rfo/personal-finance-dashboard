import type useTransactionForm from "@/hooks/transactionForm/useTransactionForm";
import { createContext } from "react";

export const TransactionFormContext = createContext<ReturnType<
  typeof useTransactionForm
> | null>(null);
