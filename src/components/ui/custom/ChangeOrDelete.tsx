import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Button } from "../button";

interface ChangeOrDeleteProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

function ChangeOrDelete({ onEdit, onDelete }: ChangeOrDeleteProps) {
  return (
    <div className="flex items-center gap-1 w-fit">
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={onEdit}
        className="hover:text-primary hover:bg-primary/10"
      >
        <IconEdit />
      </Button>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={onDelete}
        className="hover:text-destructive hover:bg-destructive/10"
      >
        <IconTrash />
      </Button>
    </div>
  );
}

export default ChangeOrDelete;
