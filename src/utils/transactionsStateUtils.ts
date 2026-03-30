import type { TransactionsState } from "@/features/store/slices/transactionsSlice";

const setLoadingState = (state: TransactionsState, loading: boolean) => {
  for (const key in state) {
    const typedKey = key as keyof TransactionsState;
    if (typeof state[typedKey].loading === "boolean") {
      state[typedKey].loading = loading;
    }
  }
};

const setErrorState = (state: TransactionsState, error: string | null) => {
  for (const key in state) {
    const typedKey = key as keyof TransactionsState;
    if (
      typeof state[typedKey].error === "string" ||
      state[typedKey].error === null
    ) {
      state[typedKey].error = error;
    }
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
