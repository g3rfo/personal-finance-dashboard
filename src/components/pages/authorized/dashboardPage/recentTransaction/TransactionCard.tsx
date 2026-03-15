import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldTitle,
} from "@/components/ui/field";

interface TransactionCardProps {
  name: string;
  date: string;
  amount: number;
  type: "INCOME" | "EXPENSE";
  icon: React.ComponentType<{ color: string; size: number }>;
  categoryColor: string;
}

function TransactionCard({
  name,
  date,
  amount,
  type,
  icon: IconComponent,
  categoryColor,
}: TransactionCardProps) {
  const amountColor = type === "INCOME" ? "text-primary" : "text-destructive";
  const amountSign = type === "INCOME" ? "+" : "-";

  return (
    <Field orientation="horizontal" className="gap-2 py-1 px-3">
      <FieldTitle>
        <div
          style={{ backgroundColor: `${categoryColor}1A` }}
          className={`flex justify-center items-center rounded-md min-w-10 min-h-10`}
        >
          <IconComponent color={categoryColor} size={24} />
        </div>
        <FieldGroup className="gap-0">
          <FieldTitle>{name}</FieldTitle>
          <FieldDescription className="text-xs font-medium text-[#6B7280]">
            {date}
          </FieldDescription>
        </FieldGroup>
      </FieldTitle>
      <FieldDescription className={`text-sm font-bold ${amountColor}`}>
        {amountSign}${amount.toFixed(2)}
      </FieldDescription>
    </Field>
  );
}

export default TransactionCard;
