import Empty from "@/components/ui/custom/Empty";
import { TableCell, TableRow } from "@/components/ui/table";

function EmptyTransactions() {
  return (
    <TableRow>
      <TableCell colSpan={6} className="text-center py-4">
        <Empty message="No transactions found for the selected filters." />
      </TableCell>
    </TableRow>
  );
}

export default EmptyTransactions;
