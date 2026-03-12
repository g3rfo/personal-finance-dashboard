export interface Category {
  id: string;
  name: string;
  type: "income" | "expense";
  budget: number;
  iconName: string;
  color: string;
}