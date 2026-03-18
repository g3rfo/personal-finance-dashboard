export interface Transaction {
  id: string;
  name: string;
  type: "income" | "expense";
  category: string;
  amount: number;
  date: string;
}

export interface TransactionResponse extends Transaction {
  userId: string;
}