import type { CategoryFormData } from "@/types/category.type";
import { useContext, useState } from "react";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import useCategoryFormHandleSubmit from "./useCategoryFormHandleSubmit";
import { CategoryFormTypeContext } from "@/context/formTypeContext";
import useCategoryToEditFormData from "./useCategoryToEditFormData";

function useCategoryForm() {
  // Determine form type
  const type = useContext(CategoryFormTypeContext);

  // Get category data on edit
  let categoryValues: CategoryFormData | null = null;
  categoryValues = useCategoryToEditFormData();

  // Form default values
  let defaultValues: CategoryFormData = {
    name: "",
    type: "expense",
    iconName: "housing",
    color: "lime",
    budget: 0,
  };

  if (type === "edit") {
    if (categoryValues) {
      defaultValues = categoryValues;
    }
  }

  // Form
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>({ defaultValues });

  // Category state management
  const [pending, setPending] = useState<boolean>(false);

  // Handle form submission
  const handleSubmitFunction = useCategoryFormHandleSubmit(type);

  // Form handlers
  const onSubmit: SubmitHandler<CategoryFormData> = async (data) => {
    try {
      setPending(true);

      if (!data) {
        return;
      }

      await handleSubmitFunction(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setPending(false);
    }
  };

  const onInvalid: SubmitErrorHandler<CategoryFormData> = () => {
    setPending(false);
  };

  const handleFormSubmit = handleSubmit(onSubmit, onInvalid);

  // Handle button message
  const formSubmitButtonMessage =
    type === "create" ? "Add Category" : "Update Category";

  return {
    control,
    register,
    errors,
    pending,
    handleFormSubmit,
    formSubmitButtonMessage,
  };
}

export default useCategoryForm;
