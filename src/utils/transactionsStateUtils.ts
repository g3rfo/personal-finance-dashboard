import type {
  FilterQuery,
  TransactionsState,
} from "@/features/store/slices/transactionsSlice";
import type { Transaction } from "@/types/transaction.type";

const statesKeys = [
  "paginated",
  "monthly",
  "filtered",
] as const satisfies (keyof TransactionsState)[];

const setLoadingState = (state: TransactionsState, loading: boolean) => {
  for (const key of statesKeys) {
    state[key].loading = loading;
  }
};

const setErrorState = (state: TransactionsState, error: string | null) => {
  for (const key of statesKeys) {
    state[key].error = error;
  }
};

export const transactionsRejectedState = (
  state: TransactionsState,
  errorMessage: string,
) => {
  setLoadingState(state, false);
  setErrorState(state, errorMessage);
};

export const sortTransactionsByDateDesc = (transactions: Transaction[]) => {
  return [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};

export const withTransactionUpsert = (
  transactions: Transaction[],
  transaction: Transaction,
) => {
  const withoutCurrent = transactions.filter(
    (item) => item.id !== transaction.id,
  );
  return sortTransactionsByDateDesc([...withoutCurrent, transaction]);
};

export const isTransactionInDateRange = (
  transactionDate: string,
  from?: string,
  to?: string,
) => {
  const value = new Date(transactionDate).getTime();

  if (from && value < new Date(from).getTime()) {
    return false;
  }

  if (to && value > new Date(to).getTime()) {
    return false;
  }

  return true;
};

export const matchesFilteredQuery = (
  transaction: Transaction,
  query: FilterQuery | null,
) => {
  if (!query) {
    return false;
  }

  if (
    !isTransactionInDateRange(transaction.date, query.monthFrom, query.monthTo)
  ) {
    return false;
  }

  if (
    query.category !== "All Categories" &&
    transaction.category !== query.category
  ) {
    return false;
  }

  if (query.type !== "all" && transaction.type !== query.type) {
    return false;
  }

  return true;
};
