export interface Category {
  id: string;
  userId: string;
  name: string;
  type: "income" | "expense";
  budget: number;
  iconName: string;
  color: string;
}
