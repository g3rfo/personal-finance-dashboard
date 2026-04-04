import useTransactionForm from "@/hooks/useTransactionForm";
import { TransactionFormContext } from "@/context/transactionFormContext";
import { Input } from "../../input";
import InputCard from "./InputCard";
import { useContext } from "react";

function NameInput() {
  const { register } = useContext(TransactionFormContext) as ReturnType<
    typeof useTransactionForm
  >;

  return (
    <InputCard
      label="Name"
      children={
        <Input
          id="name"
          type="text"
          autoComplete="on"
          placeholder="Enter transaction name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            maxLength: {
              value: 50,
              message: "Name must be at most 50 characters",
            },
          })}
          className="focus-visible:border-none focus-visible:ring-3 focus-visible:ring-primary"
        />
      }
    />
  );
}

export default NameInput;
