import type { PaginatedTransactionsResponse, Transaction } from "../../../types/transaction.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
  fetchMonthlyTransactions,
  fetchTransactions,
} from "../asyncThunks/transactionsThunks";
import { TRANSACTIONS_PER_PAGE } from "@/constants/transactions";

interface TransactionsState {
  paginated: {
    transactions: Transaction[];
    page: number;
    total: number;
    hasNextPage: boolean;
    loading: boolean;
  };
  monthly: {
    transactions: Transaction[];
    loading: boolean;
  };
  error: string | null;
}

const initialState: TransactionsState = {
  paginated: {
    transactions: [],
    page: 1,
    total: 0,
    hasNextPage: false,
    loading: false,
  },
  monthly: {
    transactions: [],
    loading: false,
  },
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchTransactions
      .addCase(fetchTransactions.pending, (state) => {
        state.paginated.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTransactions.fulfilled,
        (state, action: PayloadAction<PaginatedTransactionsResponse>) => {
          state.paginated.loading = false;

          const { transactions, page, total } = action.payload;

          if (page === 1) {
            state.paginated.transactions = transactions;
          } else {
            state.paginated.transactions = [...state.paginated.transactions, ...transactions];
          }

          state.paginated.hasNextPage = page * TRANSACTIONS_PER_PAGE < total;
          state.paginated.page = page;
          state.paginated.total = total;
        },
      )
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.paginated.loading = false;
        state.error = action.error?.message || "Failed to fetch transactions";
      })

      // fetchMonthlyTransactions
      .addCase(fetchMonthlyTransactions.pending, (state) => {
        state.monthly.loading = true;
        state.error = null;
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
        state.error = action.error?.message || "Failed to fetch monthly transactions";
      })

      // addTransaction
      .addCase(addTransaction.pending, (state) => {
        state.paginated.loading = true;
        state.error = null;
      })
      .addCase(
        addTransaction.fulfilled,
        (state, action: PayloadAction<Transaction>) => {
          state.paginated.loading = false;
          state.paginated.transactions.push(action.payload);

          const now = new Date();
          const transactionDate = new Date(action.payload.date);
          const transactionDateMonth = transactionDate.getMonth();
          const transactionDateYear = transactionDate.getFullYear();

          if (
            transactionDateMonth === now.getMonth() &&
            transactionDateYear === now.getFullYear()
          ) {
            state.monthly.transactions.push(action.payload);
          }
        },
      )
      .addCase(addTransaction.rejected, (state, action) => {
        state.paginated.loading = false;
        state.error = action.error?.message || "Failed to add transaction";
      })

      // deleteTransaction
      .addCase(deleteTransaction.pending, (state) => {
        state.paginated.loading = true;
        state.error = null;
      })
      .addCase(
        deleteTransaction.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.paginated.loading = false;
          state.paginated.transactions = state.paginated.transactions.filter(
            (t) => t.id !== action.payload,
          );
          state.monthly.transactions = state.monthly.transactions.filter(
            (t) => t.id !== action.payload,
          );
        },
      )
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.paginated.loading = false;
        state.error = action.error?.message || "Failed to delete transaction";
      });
  },
});

export default transactionsSlice.reducer;
