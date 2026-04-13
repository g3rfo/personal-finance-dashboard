import { CategoriesContext } from "@/context/categoryContext";
import { useContext } from "react";
import CategoryCard from "./CategoryCard";
import { CATEGORY_COLORS } from "@/constants/categoryColors";
import { CATEGORY_ICONS } from "@/constants/categoryIcons";

function CategoriesList({ type }: { type: "expense" | "income" }) {
  const { categoriesByType } = useContext(CategoriesContext) || {};

  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
      {categoriesByType?.[type]?.map((category) => (
        <CategoryCard
          key={category.id}
          id={category.id}
          name={category.name}
          budget={category.budget}
          icon={CATEGORY_ICONS[category.iconName]}
          color={CATEGORY_COLORS[category.color]}
        />
      ))}
    </div>
  );
}

export default CategoriesList;
