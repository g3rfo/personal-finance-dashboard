import type useManagerContent from "@/hooks/transactions/useManagerContent";
import { createContext } from "react";

export const TransactionManagerContext = createContext<ReturnType<
  typeof useManagerContent
> | null>(null);
