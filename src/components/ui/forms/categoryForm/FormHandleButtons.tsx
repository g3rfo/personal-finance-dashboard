import { CategoryFormContext } from "@/context/categoryFormContext";
import type useCategoryForm from "@/hooks/categoryForm/useCategoryForm";
import { useContext } from "react";
import { Field } from "../../field";
import DialogCloseButton from "../../DialogCloseButton";
import SubmitButton from "../../SubmitButton";

function FormHandleButtons() {
  const { pending, formSubmitButtonMessage } = useContext(
    CategoryFormContext,
  ) as ReturnType<typeof useCategoryForm>;

  return (
    <Field orientation="horizontal">
      <DialogCloseButton type="button" />
      <SubmitButton pending={pending} title={formSubmitButtonMessage} />
    </Field>
  );
}

export default FormHandleButtons;
