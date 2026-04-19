import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useMonthFilter from "@/hooks/transactions/useMonthFilter";
import { IconCalendarWeek, IconX } from "@tabler/icons-react";

function MonthFilter() {
  const minDate = new Date(2025, 0, 1);
  const maxDate = new Date();
  const maxMonthEnd = new Date(
    maxDate.getFullYear(),
    maxDate.getMonth() + 1,
    0,
  );

  const {
    month,
    range,
    handleMonthInputChange,
    handleCalendarChange,
    handleCalendarMonthChange,
    handleClear,
  } = useMonthFilter();

  return (
    <div className="flex items-center gap-2">
      <FieldLabel
        htmlFor="month-filter"
        className="text-sm font-medium text-gray-700"
      >
        Month
      </FieldLabel>
      <InputGroup className="w-full">
        <InputGroupInput
          id="month-filter"
          placeholder="Select a month"
          type="month"
          value={month}
          onChange={(e) => handleMonthInputChange(e.target.value)}
          className="text-gray-700"
        />
        <InputGroupAddon align="inline-end">
          <Popover>
            <PopoverTrigger asChild>
              <IconCalendarWeek cursor="pointer" />
            </PopoverTrigger>
            <PopoverContent align="end" data-side="top">
              <Calendar
                key={month}
                mode="range"
                showOutsideDays={false}
                defaultMonth={range.from}
                selected={range}
                onSelect={() => handleCalendarChange(month)}
                onMonthChange={(month) => handleCalendarMonthChange(month)}
                startMonth={minDate}
                endMonth={maxDate}
                disabled={{ before: minDate, after: maxMonthEnd }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Button variant="ghost" size="sm" onClick={handleClear}>
            <IconX />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export default MonthFilter;
