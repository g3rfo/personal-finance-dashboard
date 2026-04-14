import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./slices/transactionsSlice";
import userReducer from "./slices/userSlice";
import categoriesReducer from "./slices/categoriesSlice";
import transactionsFilterReducer from "./slices/transactionsFilterSlice";
import popupsReducer from "./slices/popupsSlice";
import analyticsDataReducer from "./slices/analyticsDataSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer,
    transactionsFilter: transactionsFilterReducer,
    categories: categoriesReducer,
    popups: popupsReducer,
    analyticsData: analyticsDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
