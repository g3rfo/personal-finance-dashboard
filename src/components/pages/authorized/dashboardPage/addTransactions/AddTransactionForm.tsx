import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconCalendarWeek, IconCoin } from "@tabler/icons-react";
import {
  Controller,
  type SubmitHandler,
  useForm,
  useWatch,
} from "react-hook-form";
import DialogCloseButton from "@/components/ui/DialogCloseButton";
import { addTransaction } from "@/features/store/asyncThunks/transactionsThunks";
import { useAppDispatch } from "@/features/store/hooks";
import SubmitButton from "@/components/ui/SubmitButton";
import { formatDateForInput, formatDateToStore } from "@/utils/dateFormatters";

interface AddTransactionFormValues {
  userId: string;
  name: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
}

interface AddTransactionFormProps {
  expenseCategories: string[];
  incomeCategories: string[];
}

function AddTransactionForm({
  expenseCategories,
  incomeCategories,
}: AddTransactionFormProps) {
  // Set default type and category based on available categories
  const defaultType: "income" | "expense" =
    expenseCategories.length > 0 ? "expense" : "income";
  const defaultCategory = (
    defaultType === "expense" ? expenseCategories[0] : incomeCategories[0]
  )!;

  const userId = localStorage.getItem("token") || "";

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddTransactionFormValues>({
    defaultValues: {
      userId,
      name: "",
      amount: 0,
      type: defaultType,
      category: defaultCategory,
      date: formatDateForInput(new Date()),
    },
  });

  // Transaction state management
  const dispatch = useAppDispatch();
  const [pending, setPending] = useState<boolean>(false);

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

  // Handle form submission
  const onSubmit: SubmitHandler<AddTransactionFormValues> = async (data) => {
    try {
      setPending(true);

      if (!data.userId) {
        throw new Error("User ID not found. Please log in again.");
      }

      data.date = formatDateToStore(data.date);

      dispatch(addTransaction(data));
    } catch (error) {
      console.error("Error adding transaction:", error);
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FieldGroup>
        <FieldSeparator />
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            id="name"
            type="text"
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
          />
          {errors.name && (
            <FieldDescription className="text-destructive">
              {errors.name.message}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="amount">Amount</FieldLabel>
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
              min={0.01}
              step={0.01}
            />
          </InputGroup>
          {errors.amount && (
            <FieldDescription className="text-destructive">
              {errors.amount.message}
            </FieldDescription>
          )}
        </Field>
        <Field orientation="horizontal">
          <Field>
            <FieldLabel htmlFor="type">Type</FieldLabel>
            <Controller
              name="type"
              control={control}
              rules={{ required: "Type is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="type">
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
            {errors.type && (
              <FieldDescription className="text-destructive">
                {errors.type.message}
              </FieldDescription>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="category">Category</FieldLabel>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="category">
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
            {errors.category && (
              <FieldDescription className="text-destructive">
                {errors.category.message}
              </FieldDescription>
            )}
          </Field>
        </Field>
        <Field>
          <FieldLabel htmlFor="date">Date</FieldLabel>
          <Controller
            name="date"
            control={control}
            rules={{ required: "Date is required", max: { value: formatDateForInput(new Date()), message: "Date cannot be in the future" } } }
            
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
          {errors.date && (
            <FieldDescription className="text-destructive">
              {errors.date.message}
            </FieldDescription>
          )}
        </Field>
      </FieldGroup>
      <FieldGroup>
        <Field orientation="horizontal">
          <DialogCloseButton />
          <SubmitButton pending={pending} title="Add Transaction" />
        </Field>
      </FieldGroup>
    </form>
  );
}

export default AddTransactionForm;
