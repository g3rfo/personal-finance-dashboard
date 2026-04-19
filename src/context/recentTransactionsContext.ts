import type useRecentTransactions from "@/hooks/dashboard/useRecentTransactions";
import { createContext } from "react";

export const RecentTransactionsContext = createContext<ReturnType<
  typeof useRecentTransactions
> | null>(null);
