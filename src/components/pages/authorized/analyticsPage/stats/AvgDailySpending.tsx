import { Calendar } from "lucide-react";
import StatsCard from "./StatsCard";
import { useAppSelector } from "@/features/store/hooks";
import { selectAvgDailySpending } from "@/features/store/selectors/transactionsSelectors";

function AvgDailySpending() {
  const avgDailySpending = useAppSelector(selectAvgDailySpending);

  return (
    <StatsCard
      title="Avg. Daily Spending"
      content={{
        value: `$${avgDailySpending.toFixed(2)}`,
      }}
      icon={{
        component: Calendar,
        color: "#D97706",
      }}
    />
  );
}

export default AvgDailySpending;
