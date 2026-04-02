import { IconCoin } from "@tabler/icons-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../input-group";
import InputCard from "./InputCard";
import useTransactionForm, {
  TransactionFormContext,
} from "@/hooks/useTransactionForm";
import { useContext } from "react";

function AmountInput() {
  const { register } = useContext(TransactionFormContext) as ReturnType<
    typeof useTransactionForm
  >;

  return (
    <InputCard
      label="Amount"
      children={
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <IconCoin />
          </InputGroupAddon>
          <InputGroupInput
            {...register("amount", {
              required: "Amount is required",
              valueAsNumber: true,
              min: {
                value: 0.01,
                message: "Amount must be greater than 0",
              },
            })}
            id="amount"
            type="number"
            placeholder="Enter amount"
            step={5}
            className=""
          />
        </InputGroup>
      }
    />
  );
}

export default AmountInput;
