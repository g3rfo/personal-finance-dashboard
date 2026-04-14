export interface TransactionData {
  userId: string;
  name: string;
  type: "income" | "expense";
  category: string;
  amount: number;
  date: string;
}

export interface Transaction extends TransactionData {
  id: string;
}

export interface PaginatedTransactionsResponse {
  transactions: Transaction[];
  page: number;
  total: number;
}

export type TransactionType = "all" | "income" | "expense";
export type TransactionAnalyticsType = [
  number,
  number,
  number,
  number,
  number,
  number,
];
