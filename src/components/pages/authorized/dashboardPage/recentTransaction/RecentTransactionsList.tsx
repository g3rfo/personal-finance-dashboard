import { formatToOutputDate } from "@/utils/dateFormatters";
import RecentTransactionCard from "./recentTransactionCard/RecentTransactionCard";
import { RecentTransactionsContext } from "@/context/recentTransactionsContext";
import { useContext } from "react";
import { getDefaultCategoryInfo } from "@/utils/getDefaultCategoryInfo";

function RecentTransactionsList() {
  const { transactions, transactionsOutputInfo } =
    useContext(RecentTransactionsContext) || {};

  return (
    <>
      {transactions?.map((transaction, index) => {
        const { categoryIcon, categoryColor } =
          transactionsOutputInfo?.[index] || getDefaultCategoryInfo();

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
