import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PopupsState {
  addTransaction: boolean;
  editTransaction: boolean;
  addCategory: boolean;
  editCategory: boolean;
}

const initialState: PopupsState = {
  addTransaction: false,
  editTransaction: false,
  addCategory: false,
  editCategory: false,
};

const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    setAddTransactionPopupState(state, action: PayloadAction<boolean>) {
      state.addTransaction = action.payload;
    },
    setEditTransactionPopupState(state, action: PayloadAction<boolean>) {
      state.editTransaction = action.payload;
    },
    setAddCategoryPopupState(state, action: PayloadAction<boolean>) {
      state.addCategory = action.payload;
    },
    setEditCategoryPopupState(state, action: PayloadAction<boolean>) {
      state.editCategory = action.payload;
    },
    resetPopupsState() {
      return initialState;
    },
  },
});

export const {
  setAddTransactionPopupState,
  setEditTransactionPopupState,
  setAddCategoryPopupState,
  setEditCategoryPopupState,
  resetPopupsState,
} = popupsSlice.actions;

export default popupsSlice.reducer;
