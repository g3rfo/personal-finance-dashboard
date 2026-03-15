export interface Transaction {
  id: string;
  userId: string;
  name: string;
  type: "income" | "expense";
  category: string;
  amount: number;
  date: string;
}