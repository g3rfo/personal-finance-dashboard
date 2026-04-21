import { CategoryFormContext } from "@/context/forms/categoryFormContext";
import type useCategoryForm from "@/hooks/categoryForm/useCategoryForm";
import { useContext } from "react";
import InputCard from "./InputCard";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../input-group";
import { IconWallet } from "@tabler/icons-react";

function MonthlyBudgetInput() {
  const { register } = useContext(CategoryFormContext) as ReturnType<
    typeof useCategoryForm
  >;

  return (
    <InputCard
      label="Monthly Budget"
      context={CategoryFormContext}
      children={
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <IconWallet />
          </InputGroupAddon>
          <InputGroupInput
            {...register("budget", {
              required: "Monthly budget is required",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Budget at least 0",
              },
            })}
            id="budget"
            type="number"
            placeholder="Enter budget"
            step={0.01}
          />
        </InputGroup>
      }
    />
  );
}

export default MonthlyBudgetInput;
