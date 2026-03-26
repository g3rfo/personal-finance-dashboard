import useRecentTransactions from "@/hooks/useRecentTransactions";
import { formatToOutputDate } from "@/utils/dateFormatters";
import RecentTransactionCard from "./recentTransactionCard/RecentTransactionCard";

function RecentTransactionsList() {
  const { transactions, transactionsOutputInfo } = useRecentTransactions();

  return (
    <>
      {transactions?.map((transaction, index) => {
        const { categoryIcon, categoryColor } = transactionsOutputInfo[index];

        return (
          <RecentTransactionCard
            key={transaction.id}
            name={transaction.name}
            date={formatToOutputDate(transaction.date)}
            amount={transaction.amount}
            type={transaction.type}
            icon={categoryIcon}
            categoryColor={categoryColor}
          />
        );
      })}
    </>
  );
}

export default RecentTransactionsList;
