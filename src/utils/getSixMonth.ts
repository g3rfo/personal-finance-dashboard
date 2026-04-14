import { fullMonthNames } from "@/constants/monthNames";

export const getSixMonth = () => {
  const currentMonth = new Date().getMonth();
  const months: string[] = [];

  for (let i = 0; i < 6; i++) {
    months.push(fullMonthNames[(currentMonth - 5 + i + 12) % 12]);
  }

  return months;
};
