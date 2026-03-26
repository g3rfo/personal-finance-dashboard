import type { TransactionType } from "@/types/transaction.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface DateRange {
  monthFrom?: string;
  monthTo?: string;
}

interface TransactionsFilterState {
  monthFrom: string;
  monthTo: string;
  category: string;
  type: TransactionType;
}

const initialState: TransactionsFilterState = {
  monthFrom: "",
  monthTo: "",
  category: "All Categories",
  type: "all",
};

const transactionsFilterSlice = createSlice({
  name: "transactionsFilter",
  initialState,
  reducers: {
    setMonthFilter(state, action: PayloadAction<DateRange>) {
      state.monthFrom = action.payload.monthFrom || "";
      state.monthTo = action.payload.monthTo || "";
    },
    setCategoryFilter(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setTypeFilter(state, action: PayloadAction<TransactionType>) {
      state.type = action.payload;
    },
  },
});

export const { setMonthFilter, setCategoryFilter, setTypeFilter } =
  transactionsFilterSlice.actions;

export default transactionsFilterSlice.reducer;
