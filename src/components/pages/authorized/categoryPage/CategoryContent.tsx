import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CategoriesNumber from "@/components/ui/custom/CategoriesNumber";
import { CategoriesContext } from "@/context/categoryContext";
import { useContext } from "react";
import CategoriesList from "./CategoriesList";
import Loading from "@/components/ui/custom/Loading";
import Error from "@/components/ui/custom/Error";
import Empty from "@/components/ui/custom/Empty";

interface CategoryContentProps {
  title: string;
  type: "income" | "expense";
}

function CategoryContent({ title, type }: CategoryContentProps) {
  const categoriesContext = useContext(CategoriesContext);

  if (!categoriesContext) {
    return null;
  }

  const { length, loading, error } = categoriesContext;
  const content =
    length[type] === 0 ? (
      <Empty message="No categories yet" />
    ) : (
      <CategoriesList type={type} />
    );

  return (
    <Card>
      <CardHeader className="flex justify-between items-center h-8">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CategoriesNumber number={length[type] || 0} type={type} />
      </CardHeader>
      <CardContent>
        {loading && <Loading />}
        {error && <Error message={error} />}
        {!loading && !error && content}
      </CardContent>
    </Card>
  );
}

export default CategoryContent;
