import useTransactionForm from "@/hooks/useTransactionForm";
import { TransactionFormContext } from "@/context/transactionFormContext";
import InputCard from "./InputCard";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";
import { useContext } from "react";

function CategoryInput() {
  const { control, categoryOptions } = useContext(
    TransactionFormContext,
  ) as ReturnType<typeof useTransactionForm>;

  return (
    <InputCard
      label="Category"
      context={TransactionFormContext}
      children={
        <Controller
          name="category"
          control={control}
          rules={{ required: "Category is required" }}
          render={({ field }) => (
            <Select
              name="category-select"
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categoryOptions.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      }
    />
  );
}

export default CategoryInput;
