import { useAppSelector } from "@/features/store/hooks";
import { selectStats } from "@/features/store/selectors/transactionsSelectors";
import StatCard from "./StatCard";
import { IconArrowDown, IconArrowUp, IconWallet } from "@tabler/icons-react";

function Stats() {
  const { total, income, expenses } = useAppSelector(selectStats);

  return (
    <div className="flex flex-wrap gap-6">
      <StatCard
        title="Total Balance"
        content={{
          value: total,
          color: `${total < 0 ? "EXPENSES" : "INCOME"}`,
        }}
        icon={IconWallet}
      />
      <StatCard
        title="Total Income"
        content={{ value: income, color: "INCOME" }}
        icon={IconArrowDown}
      />
      <StatCard
        title="Total Expenses"
        content={{ value: expenses, color: "EXPENSES" }}
        icon={IconArrowUp}
      />
    </div>
  );
}

export default Stats;
