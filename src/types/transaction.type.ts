export interface Transaction {
  id: string;
  userId: number;
  type: "income" | "expense";
  category: string;
  amount: number;
  date: string;
  description: string;
}