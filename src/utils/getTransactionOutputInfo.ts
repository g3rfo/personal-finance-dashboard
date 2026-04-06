import { CATEGORY_COLORS } from "@/constants/categoryColors";
import { CATEGORY_ICONS } from "@/constants/categoryIcons";

export const getTransactionOutputInfo = (
  iconName?: string,
  colorName?: string,
) => {
  const categoryIcon = CATEGORY_ICONS[iconName ?? "shopping"];
  const categoryColor = CATEGORY_COLORS[colorName ?? "pink"];

  return { categoryIcon, categoryColor };
};
