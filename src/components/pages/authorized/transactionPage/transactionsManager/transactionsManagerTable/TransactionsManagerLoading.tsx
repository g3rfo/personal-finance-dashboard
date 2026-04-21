import Loading from "@/components/ui/custom/Loading";
import { TableCell, TableRow } from "@/components/ui/table";

function TransactionsManagerLoading() {
  return (
    <TableRow>
      <TableCell colSpan={6} className="h-fit">
        <Loading />
      </TableCell>
    </TableRow>
  );
}

export default TransactionsManagerLoading;
