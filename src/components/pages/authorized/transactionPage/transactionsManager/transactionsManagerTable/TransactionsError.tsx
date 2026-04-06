import Error from "@/components/ui/Error";
import { TableCell, TableRow } from "@/components/ui/table";

function TransactionsError({ message }: { message: string | null }) {
  return (
    <TableRow>
      <TableCell colSpan={5}>
        <Error message={message} />
      </TableCell>
    </TableRow>
  );
}

export default TransactionsError;
