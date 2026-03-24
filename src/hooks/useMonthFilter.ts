import { useAppDispatch } from "@/features/store/hooks";
import { setMonthFilter } from "@/features/store/slices/transactionsFilterSlice";
import { getMonthlyDateBounds } from "@/utils/dateFormatters";
import { useEffect, useState } from "react";
import type { DateRange } from "react-day-picker";

function useMonthFilter() {
  const [month, setMonth] = useState<string>(
    new Date().toISOString().slice(0, 7),
  );

  const [range, setRange] = useState<DateRange>(() => {
    const d = new Date();
    return {
      from: new Date(d.getFullYear(), d.getMonth(), 1),
      to: new Date(d.getFullYear(), d.getMonth() + 1, 0),
    };
  });

  const updateRangeFromMonth = (month: string) => {
    const [year, mon] = month.split("-");
    const m = parseInt(mon) - 1;
    const y = parseInt(year);

    setRange({
      from: new Date(y, m, 1),
      to: new Date(y, m + 1, 0),
    });
  };

  const handleMonthInputChange = (value: string) => {
    if (!/^\d{4}-\d{2}$/.test(value)) return; // Validate "YYYY-MM" format
    setMonth(value);
    updateRangeFromMonth(value);
  };

  const handleCalendarChange = (month: string) => {
    month = month || new Date().toISOString().slice(0, 7);
    setMonth(month);
    updateRangeFromMonth(month);
  };

  const handleCalendarMonthChange = (selectedMonth: Date) => {
    const y = selectedMonth.getFullYear();
    const m = String(selectedMonth.getMonth() + 1).padStart(2, "0");

    const newMonth = `${y}-${m}`;
    setMonth(newMonth);
    updateRangeFromMonth(newMonth);
  };

  const handleClear = () => {
    setMonth("");
    setRange({ from: undefined, to: undefined });
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!month) {
      dispatch(setMonthFilter({ from: undefined, to: undefined }));
      return;
    }

    const { startDate: from, nextMonthStartDate: to } = getMonthlyDateBounds(
      new Date(month),
    );

    dispatch(setMonthFilter({ from, to }));
  }, [month, dispatch]);

  return {
    month,
    range,
    handleMonthInputChange,
    handleCalendarChange,
    handleCalendarMonthChange,
    handleClear,
  };
}

export default useMonthFilter;
