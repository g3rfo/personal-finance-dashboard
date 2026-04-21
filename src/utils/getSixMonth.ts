import { FULL_MONTH_NAMES } from "@/constants/monthNames";

export const getSixMonth = () => {
  const currentMonth = new Date().getMonth();
  const months: string[] = [];

  for (let i = 0; i < 6; i++) {
    months.push(FULL_MONTH_NAMES[(currentMonth - 5 + i + 12) % 12]);
  }

  return months;
};
