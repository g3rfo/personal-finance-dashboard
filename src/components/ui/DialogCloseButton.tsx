import { Button } from "./button";
import { DialogClose } from "./dialog";

function DialogCloseButton() {
  return (
    <DialogClose asChild>
      <Button type="button" variant="outline" className="flex-1 text-base">
        Close
      </Button>
    </DialogClose>
  );
}

export default DialogCloseButton;
