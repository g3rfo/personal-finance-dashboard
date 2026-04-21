import DialogCloseButton from "@/components/ui/custom/DialogCloseButton";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";

function ErrorTransactionForm() {
  return (
    <div className="space-y-6">
      <FieldGroup>
        <FieldDescription>
          No categories found. Create at least one income or expense category to
          add a transaction.
        </FieldDescription>
      </FieldGroup>
      <FieldGroup>
        <Field orientation="horizontal">
          <DialogCloseButton type="button" />
        </Field>
      </FieldGroup>
    </div>
  );
}

export default ErrorTransactionForm;
