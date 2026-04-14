import { CategoryFormContext } from "@/context/categoryFormContext";
import useCategoryForm from "@/hooks/categoryForm/useCategoryForm";
import { FieldSeparator } from "../../field";
import FormHandleButtons from "./FormHandleButtons";
import NameInput from "../inputs/NameInput";
import TypeInput from "../inputs/TypeInput";
import MonthlyBudgetInput from "../inputs/MonthlyBudgetInput";
import IconInput from "../inputs/IconInput";
import ColorInput from "../inputs/ColorInput";

function CategoryForm() {
  const contextValue = useCategoryForm();
  const Provider = CategoryFormContext.Provider;

  return (
    <Provider value={contextValue}>
      <form onSubmit={contextValue.handleFormSubmit} className="space-y-6">
        <FieldSeparator />
        <NameInput
          placeholder="Enter category name"
          context={CategoryFormContext}
        />
        <TypeInput />
        <IconInput />
        <ColorInput />
        <MonthlyBudgetInput />
        <FormHandleButtons />
      </form>
    </Provider>
  );
}

export default CategoryForm;
