import type { Category } from "@/types/category.type";
import type { Transaction } from "@/types/transaction.type";

const createIdGenerator = (prefix: string) => {
  return (data: Category[] | Transaction[], userId: string): string => {
    const maxId = data.reduce((max: number, { id }: { id: string }) => {
      const index = id.lastIndexOf(prefix);
      const num = parseInt(id.substring(index + 1), 10);
      return !Number.isNaN(num) && num > max ? num : max;
    }, 0);

    return `${userId}${prefix}${maxId + 1}`;
  };
};

export const generateCategoryId = createIdGenerator("c");
export const generateTransactionId = createIdGenerator("t");
