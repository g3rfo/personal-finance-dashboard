import { Controller } from "react-hook-form";
import InputCard from "./InputCard";
import useTransactionForm from "@/hooks/useTransactionForm";
import { TransactionFormContext } from "@/context/transactionFormContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";
import { useContext } from "react";

function TypeInput() {
  const { control, expenseCategories, incomeCategories } = useContext(
    TransactionFormContext,
  ) as ReturnType<typeof useTransactionForm>;

  return (
    <InputCard
      label="Type"
      children={
        <Controller
          name="type"
          control={control}
          rules={{ required: "Type is required" }}
          render={({ field }) => (
            <Select
              name="type"
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {expenseCategories.length > 0 && (
                    <SelectItem value="expense">Expense</SelectItem>
                  )}
                  {incomeCategories.length > 0 && (
                    <SelectItem value="income">Income</SelectItem>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      }
    />
  );
}

export default TypeInput;
