import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectMonthlyTransactions = (state: RootState) => {
  return state.transactions.monthly.transactions;
};

export const selectFilteredTransactions = (state: RootState) => {
  return state.transactions.filtered.transactions;
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

const makeSelectTransactionById = (id: string) => {
  return createSelector([selectFilteredTransactions], (transactions) => {
    return transactions.find((t) => t.id === id) ?? null;
  });
};

export const selectTransactionsDataToEdit = makeSelectTransactionById;
