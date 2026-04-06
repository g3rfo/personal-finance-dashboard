import {
  FieldDescription,
  FieldGroup,
  FieldTitle,
} from "@/components/ui/field";
import { IconShoppingCart } from "@tabler/icons-react";

interface RecentTransactionTitleProps {
  name: string;
  date?: string;
  icon?: React.ComponentType<{ color: string; size: number }>;
  categoryColor: string;
}

function RecentTransactionTitle({
  name,
  date,
  icon,
  categoryColor,
}: RecentTransactionTitleProps) {
  const IconComponent = icon ?? IconShoppingCart;

  return (
    <FieldTitle>
      <div
        style={{ backgroundColor: `${categoryColor}1A` }}
        className={`flex justify-center items-center rounded-md min-w-10 min-h-10`}
      >
        <IconComponent color={categoryColor} size={24} />
      </div>
      <FieldGroup className="gap-0">
        <FieldTitle>{name}</FieldTitle>
        {date && (
          <FieldDescription className="text-xs font-medium text-[#6B7280]">
            {date}
          </FieldDescription>
        )}
      </FieldGroup>
    </FieldTitle>
  );
}

export default RecentTransactionTitle;
