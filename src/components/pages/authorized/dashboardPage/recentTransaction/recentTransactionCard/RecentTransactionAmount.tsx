import { FieldTitle } from "@/components/ui/field";

interface RecentTransactionAmountProps {
  amount: number;
  type: "income" | "expense";
  align?: "left" | "right";
}

function RecentTransactionAmount({
  amount,
  type,
  align,
}: RecentTransactionAmountProps) {
  const amountColor = type === "income" ? "text-primary" : "text-destructive";
  const amountSign = type === "income" ? "+" : "-";

  return (
    <FieldTitle
      className={`${amountColor} font-medium ${align === "right" ? "justify-end" : "justify-start"}`}
    >
      {amountSign}${amount.toFixed(2)}
    </FieldTitle>
  );
}

export default RecentTransactionAmount;
