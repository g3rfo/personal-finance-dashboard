import { useAppSelector } from "@/features/store/hooks";
import { selectSavingsRate } from "@/features/store/selectors/transactionsSelectors";
import { Percent } from "lucide-react";
import StatsCard from "./StatsCard";

function SavingRate() {
  const savingRate = useAppSelector(selectSavingsRate);

  return (
    <StatsCard
      title="Savings Rate"
      content={{
        value: `${savingRate.toFixed(1)}%`,
        color: "#16A34A",
      }}
      icon={{
        component: Percent,
        color: "#16A34A",
      }}
    />
  );
}

export default SavingRate;
