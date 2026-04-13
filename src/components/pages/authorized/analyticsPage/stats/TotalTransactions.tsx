import { NotepadText } from "lucide-react";
import StatsCard from "./StatsCard";
import { useAppSelector } from "@/features/store/hooks";
import { selectTotalTransactionsCount } from "@/features/store/selectors/transactionsSelectors";

function TotalTransactions() {
  const totalTransactions = useAppSelector(selectTotalTransactionsCount);

  return (
    <StatsCard
      title="Total Transactions"
      content={{
        value: totalTransactions.toString(),
      }}
      icon={{
        component: NotepadText,
        color: "#3B82F6",
      }}
    />
  );
}

export default TotalTransactions;
