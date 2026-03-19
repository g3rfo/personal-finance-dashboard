import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectTransactions = (state: RootState) => {
  return state.transactions.transactions;
};

export const selectThisMonthTransactions = createSelector(
  [selectTransactions],
  (transactions) => {
    const today = new Date();
    const thisMonth = today.getMonth();
    const thisYear = today.getFullYear();

    return transactions?.filter((t) => {
      const transactionDate = new Date(t.date);
      return (
        transactionDate.getMonth() === thisMonth &&
        transactionDate.getFullYear() === thisYear
      );
    });
  },
);

const calculateStats = (
  transactions: ReturnType<typeof selectTransactions>,
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
  [selectThisMonthTransactions],
  (transactions) => calculateStats(transactions),
);

export const selectSortedTransactions = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions
      ? [...transactions].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        )
      : transactions;
  },
);
