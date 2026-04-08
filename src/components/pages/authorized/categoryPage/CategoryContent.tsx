import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CategoriesNumber from "@/components/ui/CategoriesNumber";
import { CategoriesContext } from "@/context/categoriesContext";
import { useContext } from "react";
import EmptyCategories from "./EmptyCategories";

interface CategoryContentProps {
  title: string;
  type: "income" | "expense";
  children?: React.ReactNode;
}

function CategoryContent({ title, type, children }: CategoryContentProps) {
  const categoriesContext = useContext(CategoriesContext);
  if (!categoriesContext) {
    throw new Error("CategoriesContext is not provided");
  }

  const { length } = categoriesContext;

  return (
    <Card>
      <CardHeader className="flex justify-between items-center h-8">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CategoriesNumber number={length[type] || 0} type={type} />
      </CardHeader>
      <CardContent>
        {length[type] === 0 ? <EmptyCategories /> : children}
      </CardContent>
    </Card>
  );
}

export default CategoryContent;
