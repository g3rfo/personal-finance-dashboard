import { TableCell, TableRow } from "@/components/ui/table";
import useManagerContent from "@/hooks/transactions/useManagerContent";
import useTransactionOutputInfo from "@/hooks/transactions/useTransactionOutputInfo";
import TransactionTitle from "../../../dashboardPage/recentTransaction/recentTransactionCard/RecentTransactionTitle";
import { formatToOutputDate } from "@/utils/dateFormatters";
import TransactionAmount from "../../../dashboardPage/recentTransaction/recentTransactionCard/RecentTransactionAmount";
import ChangeOrDelete from "@/components/ui/custom/ChangeOrDelete";
import { useContext } from "react";
import { TransactionManagerContext } from "@/context/transactionManagerContext";

function TransactionsList() {
  const { transactions, onDeleteHandler, onEditHandler } = useContext(
    TransactionManagerContext,
  ) as ReturnType<typeof useManagerContent>;

  const transactionsOutputInfo = useTransactionOutputInfo(transactions);

  return transactions.map((transaction, index) => {
    const { categoryIcon, categoryColor } = transactionsOutputInfo[index];

    return (
      <TableRow key={transaction.id}>
        <TableCell className="font-medium">
          <TransactionTitle
            categoryColor={categoryColor}
            name={transaction.name}
            icon={categoryIcon}
          />
        </TableCell>
        <TableCell>{transaction.category}</TableCell>
        <TableCell>{formatToOutputDate(transaction.date)}</TableCell>
        <TableCell>{transaction.type}</TableCell>
        <TableCell align="right">
          <TransactionAmount
            amount={transaction.amount}
            type={transaction.type}
          />
        </TableCell>
        <TableCell align="right">
          <ChangeOrDelete
            onDelete={() => onDeleteHandler(transaction.id)}
            onEdit={() => onEditHandler(transaction.id)}
          />
        </TableCell>
      </TableRow>
    );
  });
}

export default TransactionsList;
