import { TableCell, TableRow } from "@/components/ui/table";
import ViewMore from "@/components/ui/custom/ViewMore";
import { useContext } from "react";
import { TransactionManagerContext } from "@/context/transactionManagerContext";

function TransactionsManagerViewMoreButton() {
  const transactionManagerContextValue = useContext(TransactionManagerContext);

  if (!transactionManagerContextValue) {
    return null;
  }

  const { viewMoreHandler } = transactionManagerContextValue;

  return (
    <TableRow>
      <TableCell colSpan={6} className="text-center py-4">
        <ViewMore viewMoreHandler={viewMoreHandler} />
      </TableCell>
    </TableRow>
  );
}

export default TransactionsManagerViewMoreButton;
