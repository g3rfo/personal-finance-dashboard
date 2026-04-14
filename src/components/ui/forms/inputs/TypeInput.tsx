import { CategoryFormContext } from "@/context/categoryFormContext";
import type useCategoryForm from "@/hooks/categoryForm/useCategoryForm";
import { useContext } from "react";
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

function TypeInput() {
  const { control } = useContext(CategoryFormContext) as ReturnType<
    typeof useCategoryForm
  >;

  return (
    <InputCard
      label="Type"
      context={CategoryFormContext}
      children={
        <Controller
          name="type"
          control={control}
          rules={{ required: "Type is required" }}
          render={({ field }) => (
            <Select
              name="type-select"
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="expense">Expense</SelectItem>
                  <SelectItem value="income">Income</SelectItem>
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
