import { addTransaction } from "@/features/store/asyncThunks/transactionsThunks";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import {
  selectExpenseCategoriesNames,
  selectIncomeCategoriesNames,
} from "@/features/store/selectors/categoriesSelectors";
import type { TransactionData } from "@/types/transaction.type";
import { formatDateForInput, formatDateToStore } from "@/utils/dateFormatters";
import { createContext, useEffect, useState } from "react";
import {
  useForm,
  useWatch,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";

export const TransactionFormContext = createContext<ReturnType<
  typeof useTransactionForm
> | null>(null);

export const Provider = TransactionFormContext.Provider;

function useTransactionForm() {
  // Set default type and category based on available categories
  const expenseCategories = useAppSelector(selectExpenseCategoriesNames);
  const incomeCategories = useAppSelector(selectIncomeCategoriesNames);

  const defaultType: "income" | "expense" =
    expenseCategories.length > 0 ? "expense" : "income";
  const defaultCategory =
    (defaultType === "expense" ? expenseCategories[0] : incomeCategories[0]) ||
    "";
  const userId = localStorage.getItem("token") || "";

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TransactionData>({
    defaultValues: {
      userId,
      name: "",
      type: defaultType,
      category: defaultCategory,
      amount: 0,
      date: formatDateForInput(new Date()),
    },
  });

  // Watch type and category to update category options dynamically
  const selectedType = useWatch({ control, name: "type" });
  const selectedCategory = useWatch({ control, name: "category" });
  const categoryOptions =
    selectedType === "expense" ? expenseCategories : incomeCategories;

  // Ensure category is valid when type changes
  useEffect(() => {
    if (!categoryOptions.includes(selectedCategory)) {
      setValue("category", categoryOptions[0], { shouldValidate: true });
    }
  }, [categoryOptions, selectedCategory, setValue]);

  // Transaction state management
  const dispatch = useAppDispatch();
  const [pending, setPending] = useState<boolean>(false);

  // Handle form submission
  const onSubmit: SubmitHandler<TransactionData> = async (data) => {
    try {
      setPending(true);

      if (!data.userId) {
        return;
      }

      data.date = formatDateToStore(data.date);

      console.log("Submitting transaction:", data);
      await dispatch(addTransaction(data)).unwrap();
    } catch (error) {
      console.error("Error adding transaction:", error);
    } finally {
      setPending(false);
    }
  };

  const onInvalid: SubmitErrorHandler<TransactionData> = () => {
    setPending(false);
  };

  const handleFormSubmit = handleSubmit(onSubmit, onInvalid);

  return {
    control,
    register,
    errors,
    pending,
    handleFormSubmit,
    expenseCategories,
    incomeCategories,
    categoryOptions,
  };
}

export default useTransactionForm;
