import type { TransactionType } from "@/types/transaction.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface DateRange {
  from?: string;
  to?: string;
}

interface TransactionsFilterState {
  monthRange: DateRange;
  category: string;
  type: TransactionType;
}

const initialState: TransactionsFilterState = {
  monthRange: {
    from: undefined,
    to: undefined,
  },
  category: "All Categories",
  type: "All",
};

const transactionsFilterSlice = createSlice({
  name: "transactionsFilter",
  initialState,
  reducers: {
    setMonthFilter(state, action: PayloadAction<DateRange>) {
      state.monthRange = action.payload;
      console.log(
        state.monthRange.from,
        state.monthRange.to,
        state.category,
        state.type,
      );
    },
    setCategoryFilter(state, action: PayloadAction<string>) {
      state.category = action.payload;
      console.log(
        state.monthRange.from,
        state.monthRange.to,
        state.category,
        state.type,
      );
    },
    setTypeFilter(state, action: PayloadAction<TransactionType>) {
      state.type = action.payload;
      console.log(
        state.monthRange.from,
        state.monthRange.to,
        state.category,
        state.type,
      );
    },
  },
});

export const { setMonthFilter, setCategoryFilter, setTypeFilter } =
  transactionsFilterSlice.actions;

export default transactionsFilterSlice.reducer;
