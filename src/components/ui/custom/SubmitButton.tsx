import { Button } from "../button";
import { Spinner } from "../spinner";

interface SubmitButtonProps {
  pending: boolean;
  title: string;
}

function SubmitButton({ pending, title }: SubmitButtonProps) {
  return (
    <Button className="flex-1 text-base" type="submit" disabled={pending}>
      {pending ? <Spinner className="size-6" /> : title}
    </Button>
  );
}

export default SubmitButton;
