import { useAppDispatch } from "@/features/store/hooks";
import { Button } from "./button";
import { resetPopupsState } from "@/features/store/slices/popupsSlice";
import { XIcon } from "lucide-react";

interface DialogCloseButtonProps {
  type: "button" | "icon";
}

function DialogCloseButton({ type }: DialogCloseButtonProps) {
  const dispatch = useAppDispatch();

  switch (type) {
    case "icon":
      return (
        <Button
          type="button"
          variant="outline"
          size="icon-xs-sm"
          className="absolute right-6 top-6 text-base"
          onClick={() => dispatch(resetPopupsState())}
        >
          <XIcon />
        </Button>
      );
    case "button":
      return (
        <Button
          type="button"
          variant="outline"
          className="flex-1 text-base"
          onClick={() => dispatch(resetPopupsState())}
        >
          Close
        </Button>
      );
    default:
      return null;
  }
}

export default DialogCloseButton;
