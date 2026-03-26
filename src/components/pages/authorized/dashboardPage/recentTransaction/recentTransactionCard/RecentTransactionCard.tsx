import { Field } from "@/components/ui/field";
import TransactionTitle from "./RecentTransactionTitle";
import TransactionAmount from "./RecentTransactionAmount";

interface RecentTransactionCardProps {
  name: string;
  date: string;
  amount: number;
  type: "income" | "expense";
  icon?: React.ComponentType<{ color: string; size: number }>;
  categoryColor: string;
}

function RecentTransactionCard({
  name,
  date,
  amount,
  type,
  icon,
  categoryColor,
}: RecentTransactionCardProps) {
  return (
    <Field orientation="horizontal" className="gap-2 py-1 px-3">
      <TransactionTitle
        categoryColor={categoryColor}
        name={name}
        date={date}
        icon={icon}
      />
      <TransactionAmount amount={amount} type={type} align="right" />
    </Field>
  );
}

export default RecentTransactionCard;
