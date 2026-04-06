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
  transactionsFulfilledState,
  transactionsPendingState,
  transactionsRejectedState,
} from "@/utils/transactionsStateUtils";

interface PaginatedTransactionsState {
  transactions: Transaction[];
  page: number;
  total: number;
  hasNextPage: boolean;
  loading: boolean;
  error: string | null;
}

export interface TransactionsState {
  paginated: PaginatedTransactionsState;
  monthly: {
    transactions: Transaction[];
    loading: boolean;
    error: string | null;
  };
  filtered: PaginatedTransactionsState;
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
  },
  monthly: {
    transactions: [],
    loading: false,
    error: null,
  },
  filtered: {
    transactions: [],
    page: 1,
    total: 0,
    hasNextPage: false,
    loading: false,
    error: null,
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
        (state, action: PayloadAction<PaginatedTransactionsResponse>) => {
          const { transactions, page, total } = action.payload;

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
        },
      )
      .addCase(fetchFilteredTransactions.rejected, (state, action) => {
        state.filtered.loading = false;
        state.filtered.error =
          action.error?.message || "Failed to fetch filtered transactions";
      })

      // addTransaction
      .addCase(addTransaction.pending, (state) => {
        transactionsPendingState(state);
      })
      .addCase(addTransaction.fulfilled, (state) => {
        transactionsFulfilledState(state);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        transactionsRejectedState(
          state,
          action.error?.message || "Failed to add transaction",
        );
      })

      // deleteTransaction
      .addCase(deleteTransaction.pending, (state) => {
        transactionsPendingState(state);
      })
      .addCase(deleteTransaction.fulfilled, (state) => {
        transactionsFulfilledState(state);
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        transactionsRejectedState(
          state,
          action.error?.message || "Failed to delete transaction",
        );
      })

      // updateTransaction
      .addCase(updateTransaction.pending, (state) => {
        transactionsPendingState(state);
      })
      .addCase(updateTransaction.fulfilled, (state) => {
        transactionsFulfilledState(state);
        state.selectedId = null;
      })
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
