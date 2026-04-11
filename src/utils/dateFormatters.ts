import { MONTH_NAMES } from "@/constants/monthNames";

export const formatToOutputDate = (
  date: Date | string | undefined = new Date(),
): string => {
  const dateValue = typeof date === "string" ? new Date(date) : date;

  const year = dateValue.getFullYear();
  const month = MONTH_NAMES[dateValue.getMonth()];
  const day = String(dateValue.getDate()).padStart(2, "0");
  return `${month} ${day}, ${year}`;
};

export const getMonthlyDateBounds = (month?: Date) => {
  const now: Date = month ? month : new Date();

  const startDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    1,
  ).toISOString();
  const nextMonthStartDate = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    1,
    0,
    0,
    0,
    -1,
  ).toISOString();
  return { startDate, nextMonthStartDate };
};

export const formatDateForInput = (date: Date | string): string => {
  const dateValue = typeof date === "string" ? new Date(date) : date;
  const year = dateValue.getFullYear();
  const month = String(dateValue.getMonth() + 1).padStart(2, "0");
  const day = String(dateValue.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatDateToStore = (dateStr: string): string => {
  const [year, month, day] = dateStr.split("-");
  const now = new Date();
  const dateValue = new Date(
    now.setFullYear(Number(year), Number(month) - 1, Number(day)),
  );
  return dateValue.toISOString();
};
