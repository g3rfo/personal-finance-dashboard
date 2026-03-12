import type { Category } from "@/types/category.type";

export const generateCategoryId = (categories: Category[], userId: string): string => {
  const maxId = categories.reduce((max, { id }) => {
    const index = id.lastIndexOf("c");
    const num = parseInt(id.substring(index + 1), 10);
    return !Number.isNaN(num) && num > max ? num : max;
  }, 0);

  return `${userId}c${maxId + 1}`;
};