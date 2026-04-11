import type { Transaction } from "@/types/transaction.type";

export const transactionsSumupByCategories = (
  transactions: Transaction[],
  categoriesNames: string[],
) => {
  if (!categoriesNames.length) {
    return;
  }

  const sumup: Record<string, number> = {};

  categoriesNames.forEach((name) => {
    sumup[name] = 0;
  });

  transactions.forEach((t) => {
    if (sumup[t.category] !== undefined) {
      sumup[t.category] += t.amount;
    }
  });

  return sumup;
};
