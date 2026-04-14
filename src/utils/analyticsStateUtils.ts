import type { AnalyticsDataState } from "@/features/store/slices/analyticsDataSlice";
import { getSixMonthDateBounds } from "./dateFormatters";

export const getIndex = (date: string) => {
  const { startDate, endDate } = getSixMonthDateBounds();

  if (
    new Date(date) < new Date(startDate) ||
    new Date(date) > new Date(endDate)
  ) {
    return -1;
  }

  const tMonth = new Date(date).getMonth();
  const index = (tMonth - (new Date().getMonth() - 5) + 12) % 12;

  return index;
};

export const addValueToIndex = (
  index: number,
  type: "income" | "expense",
  amount: number,
  state: AnalyticsDataState,
) => {
  if (type === "income") {
    state.value.income[index] += amount;
    state.value.balance[index] += amount;
  } else {
    state.value.expenses[index] += amount;
    state.value.balance[index] -= amount;
  }
};

export const subtractValueFromIndex = (
  index: number,
  type: "income" | "expense",
  amount: number,
  state: AnalyticsDataState,
) => {
  if (type === "income") {
    state.value.income[index] -= amount;
    state.value.balance[index] -= amount;
  } else {
    state.value.expenses[index] -= amount;
    state.value.balance[index] += amount;
  }
};

export const updateValueOnEdit = (
  oldIndex: number,
  newIndex: number,
  oldType: "income" | "expense",
  newType: "income" | "expense",
  oldAmount: number,
  newAmount: number,
  state: AnalyticsDataState,
) => {
  const oldInRange = oldIndex !== -1;
  const newInRange = newIndex !== -1;

  if (!oldInRange && !newInRange) {
    return;
  }

  if (oldInRange && !newInRange) {
    subtractValueFromIndex(oldIndex, oldType, oldAmount, state);
    return;
  }

  if (!oldInRange && newInRange) {
    addValueToIndex(newIndex, newType, newAmount, state);
    return;
  }

  if (oldIndex === newIndex) {
    if (oldType === newType) {
      const amountDiff = newAmount - oldAmount;
      if (newType === "income") {
        state.value.income[newIndex] += amountDiff;
        state.value.balance[newIndex] += amountDiff;
      } else {
        state.value.expenses[newIndex] += amountDiff;
        state.value.balance[newIndex] -= amountDiff;
      }
    } else {
      subtractValueFromIndex(oldIndex, oldType, oldAmount, state);
      addValueToIndex(newIndex, newType, newAmount, state);
    }
  } else {
    subtractValueFromIndex(oldIndex, oldType, oldAmount, state);
    addValueToIndex(newIndex, newType, newAmount, state);
  }
};
