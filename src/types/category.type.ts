export interface CategoryFormData {
  name: string;
  type: "income" | "expense";
  iconName: string;
  color: string;
  budget: number;
}

export interface Category extends CategoryFormData {
  id: string;
  userId: string;
}
