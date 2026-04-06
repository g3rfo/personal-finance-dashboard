import { Table, TableBody, TableHeader } from "@/components/ui/table";
import useManagerContent from "@/hooks/useManagerContent";
import TransactionsManagerContent from "./TransactionsManagerContent";
import TransactionsManagerViewMoreButton from "./TransactionsManagerViewMoreButton";
import TransactionsManagerLoading from "./TransactionsManagerLoading";
import ManagerTableHeads from "./ManagerTableHeads";
import TransactionsError from "./TransactionsError";

function TransactionsManagerTable() {
  const { hasNextPage, loading, error } = useManagerContent();

  return (
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
  );
}

export default TransactionsManagerTable;
