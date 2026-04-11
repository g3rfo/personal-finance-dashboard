import type {
  PaginatedTransactionsResponse,
  Transaction,
} from "../../../types/transaction.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
  fetchFilteredTransactions,
  fetchMonthlyTransactions,
  fetchTransactions,
  updateTransaction,
} from "../asyncThunks/transactionsThunks";
import { TRANSACTIONS_PER_PAGE } from "@/constants/transactions";
import {
  isTransactionInDateRange,
  matchesFilteredQuery,
  transactionsRejectedState,
  withTransactionUpsert,
} from "@/utils/transactionsStateUtils";

interface PaginatedTransactionsState {
  transactions: Transaction[];
  page: number;
  total: number;
  hasNextPage: boolean;
  loading: boolean;
  error: string | null;
  hasFetched: boolean;
}

export interface FilterQuery {
  monthFrom: string;
  monthTo: string;
  category: string;
  type: string;
}

export interface TransactionsState {
  paginated: PaginatedTransactionsState;
  monthly: {
    transactions: Transaction[];
    loading: boolean;
    error: string | null;
    hasFetched: boolean;
  };
  filtered: PaginatedTransactionsState & {
    query: FilterQuery | null;
  };
  selectedId: string | null;
}

const initialState: TransactionsState = {
  paginated: {
    transactions: [],
    page: 1,
    total: 0,
    hasNextPage: false,
    loading: false,
    error: null,
    hasFetched: false,
  },
  monthly: {
    transactions: [],
    loading: false,
    error: null,
    hasFetched: false,
  },
  filtered: {
    transactions: [],
    page: 1,
    total: 0,
    hasNextPage: false,
    loading: false,
    error: null,
    hasFetched: false,
    query: null,
  },
  selectedId: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setSelectedTransactionId(state, action: PayloadAction<string>) {
      state.selectedId = action.payload;
    },
    unsetSelectedTransactionId(state) {
      state.selectedId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchTransactions
      .addCase(fetchTransactions.pending, (state) => {
        state.paginated.loading = true;
        state.paginated.error = null;
      })
      .addCase(
        fetchTransactions.fulfilled,
        (state, action: PayloadAction<PaginatedTransactionsResponse>) => {
          const { transactions, page, total } = action.payload;

          if (page === 1) {
            state.paginated.transactions = transactions;
          } else {
            state.paginated.transactions = [
              ...state.paginated.transactions,
              ...transactions,
            ];
          }

          state.paginated.hasNextPage = page * TRANSACTIONS_PER_PAGE < total;
          state.paginated.page = page;
          state.paginated.total = total;

          state.paginated.loading = false;
          state.paginated.hasFetched = true;
        },
      )
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.paginated.loading = false;
        state.paginated.error =
          action.error?.message || "Failed to fetch transactions";
      })

      // fetchMonthlyTransactions
      .addCase(fetchMonthlyTransactions.pending, (state) => {
        state.monthly.loading = true;
        state.monthly.error = null;
      })
      .addCase(
        fetchMonthlyTransactions.fulfilled,
        (state, action: PayloadAction<Transaction[]>) => {
          state.monthly.loading = false;
          state.monthly.transactions = action.payload;
          state.monthly.hasFetched = true;
        },
      )
      .addCase(fetchMonthlyTransactions.rejected, (state, action) => {
        state.monthly.loading = false;
        state.monthly.error =
          action.error?.message || "Failed to fetch monthly transactions";
      })

      // fetchFilteredTransactions
      .addCase(fetchFilteredTransactions.pending, (state) => {
        state.filtered.loading = true;
        state.filtered.error = null;
      })
      .addCase(
        fetchFilteredTransactions.fulfilled,
        (
          state,
          action: PayloadAction<PaginatedTransactionsResponse & FilterQuery>,
        ) => {
          const {
            transactions,
            page,
            total,
            monthFrom,
            monthTo,
            category,
            type,
          } = action.payload;

          if (page === 1) {
            state.filtered.transactions = transactions;
          } else {
            state.filtered.transactions = [
              ...state.filtered.transactions,
              ...transactions,
            ];
          }

          state.filtered.page = page;
          state.filtered.total = total;
          state.filtered.hasNextPage = page * TRANSACTIONS_PER_PAGE < total;

          state.filtered.loading = false;
          state.filtered.hasFetched = true;
          state.filtered.query = {
            monthFrom: monthFrom,
            monthTo: monthTo,
            category: category,
            type: type,
          };
        },
      )
      .addCase(fetchFilteredTransactions.rejected, (state, action) => {
        state.filtered.loading = false;
        state.filtered.error =
          action.error?.message || "Failed to fetch filtered transactions";
      })

      // addTransaction
      .addCase(addTransaction.pending, (state) => {
        state.paginated.error = null;
        state.monthly.error = null;
        state.filtered.error = null;
      })
      .addCase(
        addTransaction.fulfilled,
        (state, action: PayloadAction<Transaction>) => {
          const createdTransaction = action.payload;
          const loadedPaginatedItemsCount =
            state.paginated.page * TRANSACTIONS_PER_PAGE;

          state.paginated.transactions = withTransactionUpsert(
            state.paginated.transactions,
            createdTransaction,
          ).slice(0, loadedPaginatedItemsCount);
          state.paginated.total += 1;
          state.paginated.hasNextPage =
            state.paginated.page * TRANSACTIONS_PER_PAGE <
            state.paginated.total;

          if (matchesFilteredQuery(createdTransaction, state.filtered.query)) {
            const loadedFilteredItemsCount =
              state.filtered.page * TRANSACTIONS_PER_PAGE;
            state.filtered.transactions = withTransactionUpsert(
              state.filtered.transactions,
              createdTransaction,
            ).slice(0, loadedFilteredItemsCount);
            state.filtered.total += 1;
            state.filtered.hasNextPage =
              state.filtered.page * TRANSACTIONS_PER_PAGE <
              state.filtered.total;
          }

          if (isTransactionInDateRange(createdTransaction.date)) {
            state.monthly.transactions = withTransactionUpsert(
              state.monthly.transactions,
              createdTransaction,
            );
          }

          state.selectedId = null;
        },
      )
      .addCase(addTransaction.rejected, (state, action) => {
        transactionsRejectedState(
          state,
          action.error?.message || "Failed to add transaction",
        );
      })

      // deleteTransaction
      .addCase(deleteTransaction.pending, (state) => {
        state.paginated.error = null;
        state.monthly.error = null;
        state.filtered.error = null;
      })
      .addCase(
        deleteTransaction.fulfilled,
        (state, action: PayloadAction<string>) => {
          const deletedTransactionId = action.payload;

          const paginatedTransactionsLength =
            state.paginated.transactions.length;
          state.paginated.transactions = state.paginated.transactions.filter(
            (transaction) => transaction.id !== deletedTransactionId,
          );
          if (
            state.paginated.transactions.length !== paginatedTransactionsLength
          ) {
            state.paginated.total = Math.max(state.paginated.total - 1, 0);
            state.paginated.hasNextPage =
              state.paginated.page * TRANSACTIONS_PER_PAGE <
              state.paginated.total;
          }

          const filteredTransactionsLength = state.filtered.transactions.length;
          state.filtered.transactions = state.filtered.transactions.filter(
            (transaction) => transaction.id !== deletedTransactionId,
          );
          if (
            state.filtered.transactions.length !== filteredTransactionsLength
          ) {
            state.filtered.total = Math.max(state.filtered.total - 1, 0);
            state.filtered.hasNextPage =
              state.filtered.page * TRANSACTIONS_PER_PAGE <
              state.filtered.total;
          }

          state.monthly.transactions = state.monthly.transactions.filter(
            (transaction) => transaction.id !== deletedTransactionId,
          );

          state.selectedId = null;
        },
      )
      .addCase(deleteTransaction.rejected, (state, action) => {
        transactionsRejectedState(
          state,
          action.error?.message || "Failed to delete transaction",
        );
      })

      // updateTransaction
      .addCase(updateTransaction.pending, (state) => {
        state.paginated.error = null;
        state.monthly.error = null;
        state.filtered.error = null;
      })
      .addCase(
        updateTransaction.fulfilled,
        (state, action: PayloadAction<Transaction>) => {
          state.selectedId = null;

          const updatedTransaction = action.payload;
          const loadedPaginatedItemsCount =
            state.paginated.page * TRANSACTIONS_PER_PAGE;

          state.paginated.transactions = withTransactionUpsert(
            state.paginated.transactions,
            updatedTransaction,
          ).slice(0, loadedPaginatedItemsCount);

          const hasFilteredTransaction = state.filtered.transactions.some(
            (transaction) => transaction.id === updatedTransaction.id,
          );
          const shouldBeInFiltered = matchesFilteredQuery(
            updatedTransaction,
            state.filtered.query,
          );
          const loadedFilteredItemsCount =
            state.filtered.page * TRANSACTIONS_PER_PAGE;

          if (hasFilteredTransaction && !shouldBeInFiltered) {
            state.filtered.transactions = state.filtered.transactions.filter(
              (transaction) => transaction.id !== updatedTransaction.id,
            );
            state.filtered.total = Math.max(state.filtered.total - 1, 0);
          } else if (!hasFilteredTransaction && shouldBeInFiltered) {
            state.filtered.transactions = withTransactionUpsert(
              state.filtered.transactions,
              updatedTransaction,
            ).slice(0, loadedFilteredItemsCount);
            state.filtered.total += 1;
          } else if (hasFilteredTransaction && shouldBeInFiltered) {
            state.filtered.transactions = withTransactionUpsert(
              state.filtered.transactions,
              updatedTransaction,
            ).slice(0, loadedFilteredItemsCount);
          }

          state.filtered.hasNextPage =
            state.filtered.page * TRANSACTIONS_PER_PAGE < state.filtered.total;

          const hasMonthlyTransaction = state.monthly.transactions.some(
            (transaction) => transaction.id === updatedTransaction.id,
          );
          const shouldBeInMonthly = isTransactionInDateRange(
            updatedTransaction.date,
          );

          if (hasMonthlyTransaction && !shouldBeInMonthly) {
            state.monthly.transactions = state.monthly.transactions.filter(
              (transaction) => transaction.id !== updatedTransaction.id,
            );
          } else if (!hasMonthlyTransaction && shouldBeInMonthly) {
            state.monthly.transactions = withTransactionUpsert(
              state.monthly.transactions,
              updatedTransaction,
            );
          } else if (hasMonthlyTransaction && shouldBeInMonthly) {
            state.monthly.transactions = withTransactionUpsert(
              state.monthly.transactions,
              updatedTransaction,
            );
          }

          state.selectedId = null;
        },
      )
      .addCase(updateTransaction.rejected, (state, action) => {
        transactionsRejectedState(
          state,
          action.error?.message || "Failed to update transaction",
        );
      });
  },
});

export const { setSelectedTransactionId, unsetSelectedTransactionId } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
