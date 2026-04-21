import { Card } from "@/components/ui/card";
import { FieldGroup, FieldLegend } from "@/components/ui/field";

interface FormWrapProps {
  title: string;
  form: React.ReactNode;
  link: React.ReactNode;
}

function FormWrap({ title, form, link }: FormWrapProps) {
  return (
    <Card className="w-90 p-6">
      <FieldGroup className="gap-4">
        <FieldLegend data-variant="title">{title}</FieldLegend>
        {form}
        {link}
      </FieldGroup>
    </Card>
  );
}

export default FormWrap;
