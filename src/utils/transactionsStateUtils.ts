import type { TransactionsState } from "@/features/store/slices/transactionsSlice";

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

export const transactionsPendingState = (state: TransactionsState) => {
  setLoadingState(state, true);
  setErrorState(state, null);
};

export const transactionsFulfilledState = (state: TransactionsState) => {
  setLoadingState(state, false);
};

export const transactionsRejectedState = (
  state: TransactionsState,
  errorMessage: string,
) => {
  setLoadingState(state, false);
  setErrorState(state, errorMessage);
};
