import { Table, TableBody, TableHeader } from "@/components/ui/table";
import useManagerContent from "@/hooks/transactions/useManagerContent";
import TransactionsManagerContent from "./TransactionsManagerContent";
import TransactionsManagerViewMoreButton from "./TransactionsManagerViewMoreButton";
import TransactionsManagerLoading from "./TransactionsManagerLoading";
import ManagerTableHeads from "./ManagerTableHeads";
import TransactionsError from "./TransactionsError";
import { TransactionManagerContext } from "@/context/transactionManagerContext";

function TransactionsManagerTable() {
  const contextValue = useManagerContent();
  const { loading, error, hasNextPage } = contextValue;
  const Provider = TransactionManagerContext.Provider;

  return (
    <Provider value={contextValue}>
      <Table>
        <TableHeader>
          <ManagerTableHeads />
        </TableHeader>
        <TableBody>
          {loading && <TransactionsManagerLoading />}
          {error && <TransactionsError message={error} />}
          {!loading && !error && <TransactionsManagerContent />}
          {hasNextPage && !loading && !error && (
            <TransactionsManagerViewMoreButton />
          )}
        </TableBody>
      </Table>
    </Provider>
  );
}

export default TransactionsManagerTable;
