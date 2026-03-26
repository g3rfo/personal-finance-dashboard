import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import { setMonthFilter } from "@/features/store/slices/transactionsFilterSlice";
import { getMonthlyDateBounds } from "@/utils/dateFormatters";
import { useEffect, useState } from "react";
import type { DateRange } from "react-day-picker";
import { useDebouncedCallback } from "use-debounce";

function useMonthFilter() {
  const dispatch = useAppDispatch();
  const { monthFrom, monthTo } = useAppSelector(
    (state) => state.transactionsFilter,
  );

  // States
  const [month, setMonth] = useState<string>(() => {
    if (monthFrom && monthTo) {
      const from = new Date(monthFrom);
      return `${from.getFullYear()}-${String(from.getMonth() + 1).padStart(2, "0")}`;
    }
    return "";
  });

  const [range, setRange] = useState<DateRange>(() => {
    if (monthFrom && monthTo) {
      return {
        from: new Date(monthFrom),
        to: new Date(monthTo),
      };
    }
    return {
      from: undefined,
      to: undefined,
    };
  });

  // Change handlers
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

  // Effects
  const debouncedHandleMonthChange = useDebouncedCallback(
    (nextMonth: string) => {
      if (!nextMonth) {
        dispatch(setMonthFilter({ monthFrom: undefined, monthTo: undefined }));
        return;
      }

      const { startDate: monthFrom, nextMonthStartDate: monthTo } =
        getMonthlyDateBounds(new Date(nextMonth));

      dispatch(setMonthFilter({ monthFrom, monthTo }));
    },
    500,
  );

  useEffect(() => {
    debouncedHandleMonthChange(month);
  }, [month, debouncedHandleMonthChange]);

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
