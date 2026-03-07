export interface Transaction {
  id: string;
  userId: string;
  type: "income" | "expense";
  category: string;
  amount: number;
  date: string;
  description: string;
}