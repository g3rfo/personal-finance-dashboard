import { CATEGORY_COLORS } from "@/constants/categoryColors";
import { CATEGORY_ICONS } from "@/constants/categoryIcons";

export const getDefaultCategoryInfo = () => {
  return {
    categoryIcon: CATEGORY_ICONS[0],
    categoryColor: CATEGORY_COLORS[0],
  };
};
