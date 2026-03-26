import { Button } from "@/components/ui/button";
import type { TransactionType } from "@/types/transaction.type";

interface TypeButtonProps {
  type: TransactionType;
  isSelected: boolean;
  selectedColor: string;
  onClick: () => void;
}

function TypeButton({
  type,
  isSelected,
  selectedColor,
  onClick,
}: TypeButtonProps) {
  return (
    <Button
      variant="outline"
      size="default"
      style={{
        backgroundColor: isSelected ? `var(--${selectedColor})` : "inherit",
        color: isSelected ? "white" : "inherit",
      }}
      onClick={onClick}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </Button>
  );
}

export default TypeButton;
