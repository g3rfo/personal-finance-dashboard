import { TableCell, TableRow } from "@/components/ui/table";
import ViewMore from "@/components/ui/ViewMore";
import useManagerContent from "@/hooks/useManagerContent";

function TransactionsManagerViewMoreButton() {
  const { viewMoreHandler } = useManagerContent();

  return (
    <TableRow>
      <TableCell colSpan={6} className="text-center py-4">
        <ViewMore viewMoreHandler={viewMoreHandler} />
      </TableCell>
    </TableRow>
  );
}

export default TransactionsManagerViewMoreButton;
