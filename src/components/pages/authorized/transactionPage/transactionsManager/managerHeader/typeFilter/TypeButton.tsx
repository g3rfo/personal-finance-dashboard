import { Button } from "@/components/ui/button";

interface TypeButtonProps {
  type: string;
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
      <span className="text-sm font-medium">{type}</span>
    </Button>
  );
}

export default TypeButton;
