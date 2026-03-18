import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectTransactions = (state: RootState) => {
  return state.transactions.transactions;
};

export const selectStats = createSelector(
  [selectTransactions],
  (transactions) => {
    return {
      total: transactions?.reduce(
        (sum, t) => (t.type === "income" ? sum + t.amount : sum - t.amount),
        0,
      ),
      income: transactions
        ?.filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0),
      expenses: transactions
        ?.filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0),
    };
  },
);

export const selectSortedTransactions = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions
      ? [...transactions].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        )
      : transactions;
  }
);