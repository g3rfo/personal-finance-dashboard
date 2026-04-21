import Error from "@/components/ui/custom/Error";
import { TableCell, TableRow } from "@/components/ui/table";

function TransactionsError({ message }: { message: string | null }) {
  return (
    <TableRow>
      <TableCell colSpan={6}>
        <Error message={message} />
      </TableCell>
    </TableRow>
  );
}

export default TransactionsError;
