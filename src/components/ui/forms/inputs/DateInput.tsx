import { Controller } from "react-hook-form";
import InputCard from "./InputCard";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../input-group";
import { Popover, PopoverContent, PopoverTrigger } from "../../popover";
import { Calendar } from "../../calendar";
import { formatDateForInput } from "@/utils/dateFormatters";
import useTransactionForm, {
  TransactionFormContext,
} from "@/hooks/useTransactionForm";
import { IconCalendarWeek } from "@tabler/icons-react";
import { useContext } from "react";

function DateInput() {
  const { control } = useContext(TransactionFormContext) as ReturnType<
    typeof useTransactionForm
  >;

  return (
    <InputCard
      label="Date"
      children={
        <Controller
          name="date"
          control={control}
          rules={{
            required: "Date is required",
            max: {
              value: formatDateForInput(new Date()),
              message: "Date cannot be in the future",
            },
          }}
          render={({ field }) => (
            <InputGroup>
              <InputGroupInput
                id="date"
                type="date"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
              <InputGroupAddon align="inline-end">
                <Popover>
                  <PopoverTrigger asChild>
                    <IconCalendarWeek cursor="pointer" />
                  </PopoverTrigger>
                  <PopoverContent align="end" data-side="top">
                    <Calendar
                      selected={new Date(field.value)}
                      onSelect={(date: Date | undefined) =>
                        field.onChange(
                          typeof date === "undefined"
                            ? ""
                            : formatDateForInput(date),
                        )
                      }
                      mode="single"
                      disabled={(date) => date > new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </InputGroupAddon>
            </InputGroup>
          )}
        />
      }
    />
  );
}

export default DateInput;
