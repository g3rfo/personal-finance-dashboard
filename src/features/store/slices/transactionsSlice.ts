import type { Transaction } from "../../../types/transaction.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  addTransaction,
  fetchTransactions,
} from "../asyncThunks/transactionsThunks";

interface TransactionsState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}

const initialState: TransactionsState = {
  transactions: [],
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTransactions.fulfilled,
        (state, action: PayloadAction<Transaction[]>) => {
          state.loading = false;
          state.transactions = action.payload;
        },
      )
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to fetch transactions";
      })
      
      .addCase(addTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addTransaction.fulfilled,
        (state, action: PayloadAction<Transaction>) => {
          state.loading = false;
          state.transactions.push(action.payload);
        },
      )
      .addCase(addTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to add transaction";
      });
  },
});

export default transactionsSlice.reducer;
