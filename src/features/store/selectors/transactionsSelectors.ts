import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectMonthlyTransactions = (state: RootState) => {
  return state.transactions.monthly.transactions;
};

const calculateStats = (
  transactions: ReturnType<typeof selectMonthlyTransactions>,
) => {
  return (
    transactions?.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.income += transaction.amount;
        } else {
          acc.expenses += transaction.amount;
        }

        acc.total = acc.income - acc.expenses;
        return acc;
      },
      { total: 0, income: 0, expenses: 0 },
    ) ?? { total: 0, income: 0, expenses: 0 }
  );
};

export const selectStats = createSelector(
  [selectMonthlyTransactions],
  (transactions) => calculateStats(transactions),
);
