import { FieldDescription } from "../../field";

interface InputErrorProps {
  error?: string;
}

function InputError({ error }: InputErrorProps) {
  if (!error) {
    return null;
  }

  return (
    <FieldDescription className="text-destructive">{error}</FieldDescription>
  );
}

export default InputError;
