import type useBudgetOverview from "@/hooks/dashboard/useBudgetOverview";
import { createContext } from "react";

export const BudgetOverviewContext = createContext<ReturnType<
  typeof useBudgetOverview
> | null>(null);
