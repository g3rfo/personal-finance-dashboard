import type {
  Transaction,
  TransactionAnalyticsType,
  TransactionData,
} from "@/types/transaction.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchAnalyticsData } from "../asyncThunks/analyticsDataThunks";
import {
  addValueToIndex,
  getIndex,
  subtractValueFromIndex,
  updateValueOnEdit,
} from "@/utils/analyticsStateUtils";

export interface AnalyticsDataValue {
  income: TransactionAnalyticsType;
  expenses: TransactionAnalyticsType;
  balance: TransactionAnalyticsType;
}

export interface AnalyticsDataState {
  value: AnalyticsDataValue;
  loading: boolean;
  error: string | null;
}

const initialState: AnalyticsDataState = {
  value: {
    income: [0, 0, 0, 0, 0, 0],
    expenses: [0, 0, 0, 0, 0, 0],
    balance: [0, 0, 0, 0, 0, 0],
  } satisfies AnalyticsDataValue,
  loading: false,
  error: null,
};

const analyticsDataSlice = createSlice({
  name: "analyticsData",
  initialState,
  reducers: {
    resetAnalyticsData: () => {
      return initialState;
    },
    updateValueOnTransactionAdd: (
      state,
      action: PayloadAction<TransactionData>,
    ) => {
      const { date, type, amount } = action.payload;
      const index = getIndex(date);

      if (index === -1) {
        return;
      }

      addValueToIndex(index, type, amount, state);
    },
    updateValueOnTransactionDelete: (
      state,
      action: PayloadAction<Transaction>,
    ) => {
      const { date, type, amount } = action.payload;
      const index = getIndex(date);

      if (index === -1) {
        return;
      }

      subtractValueFromIndex(index, type, amount, state);
    },
    updateValueOnTransactionEdit: (
      state,
      action: PayloadAction<{
        oldTransaction: Transaction;
        newTransaction: TransactionData;
      }>,
    ) => {
      const { oldTransaction, newTransaction } = action.payload;
      const oldIndex = getIndex(oldTransaction.date);
      const newIndex = getIndex(newTransaction.date);

      updateValueOnEdit(
        oldIndex,
        newIndex,
        oldTransaction.type,
        newTransaction.type,
        oldTransaction.amount,
        newTransaction.amount,
        state,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalyticsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAnalyticsData.fulfilled,
        (state, action: PayloadAction<AnalyticsDataValue>) => {
          state.value = action.payload;
          state.loading = false;
        },
      )
      .addCase(fetchAnalyticsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export const {
  updateValueOnTransactionAdd,
  updateValueOnTransactionDelete,
  updateValueOnTransactionEdit,
  resetAnalyticsData,
} = analyticsDataSlice.actions;

export default analyticsDataSlice.reducer;
