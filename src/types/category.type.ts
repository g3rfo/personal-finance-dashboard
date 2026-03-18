export interface Category {
  id: string;
  name: string;
  type: "income" | "expense";
  budget: number;
  iconName: string;
  color: string;
}

export interface CategoryResponse extends Category {
  userId: string;
}