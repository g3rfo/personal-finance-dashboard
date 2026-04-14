import { type AnalyticsDataState } from "@/features/store/slices/analyticsDataSlice";
import { createContext } from "react";

export const AnalyticsContext = createContext<AnalyticsDataState>({
  value: {
    income: [0, 0, 0, 0, 0, 0],
    expenses: [0, 0, 0, 0, 0, 0],
    balance: [0, 0, 0, 0, 0, 0],
  },
  loading: true,
  error: null,
});
