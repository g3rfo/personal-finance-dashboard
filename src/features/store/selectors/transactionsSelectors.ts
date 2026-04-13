import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectMonthlyTransactions = (state: RootState) => {
  return state.transactions.monthly.transactions;
};

export const selectFilteredTransactions = (state: RootState) => {
  return state.transactions.filtered.transactions;
};

// Dashboard stats selectors
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

// Transaction edit selectors
const makeSelectTransactionById = (id: string) => {
  return createSelector([selectFilteredTransactions], (transactions) => {
    return transactions.find((t) => t.id === id) ?? null;
  });
};

export const selectTransactionsDataToEdit = makeSelectTransactionById;

// Analytics selectors
export const selectSavingsRate = createSelector([selectStats], (stats) => {
  if (stats.income === 0) return 0;
  return (stats.total / stats.income) * 100;
});

export const selectTotalTransactionsCount = createSelector(
  [selectMonthlyTransactions],
  (transactions) => transactions.length,
);

export const selectAvgDailySpending = createSelector(
  [selectMonthlyTransactions],
  (transactions) => {
    const expenses = transactions.filter((t) => t.type === "expense");
    const totalExpenses = expenses.reduce((sum, t) => sum + t.amount, 0);
    const daysInMonth = new Date().getDate();
    return totalExpenses / daysInMonth;
  },
);

export const selectCategoriesAmountsByType = createSelector(
  [selectStats],
  (stats) => {
    return { totalExpenses: stats.expenses, totalIncome: stats.income };
  },
);

const makeSelectTransactionsValuesByCategory = (type: "income" | "expense") => {
  return createSelector([selectMonthlyTransactions], (transactions) => {
    return transactions
      .filter((t) => t.type === type)
      .reduce(
        (acc, t) => {
          acc[t.category] = (acc[t.category] ?? 0) + t.amount;
          return acc;
        },
        {} as Record<string, number>,
      );
  });
};

export const selectExpensesTransactionsValues =
  makeSelectTransactionsValuesByCategory("expense");
export const selectIncomeTransactionsValues =
  makeSelectTransactionsValuesByCategory("income");
