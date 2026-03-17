import { Button } from "./button";
import { Spinner } from "./spinner";

interface SubmitButtonProps {
  pending: boolean;
  title: string;
}

function SubmitButton({ pending, title }: SubmitButtonProps) {
  return (
    <Button className="text-base flex-1" type="submit" disabled={pending}>
      {pending ? <Spinner className="size-6" /> : title}
    </Button>
  );
}

export default SubmitButton;