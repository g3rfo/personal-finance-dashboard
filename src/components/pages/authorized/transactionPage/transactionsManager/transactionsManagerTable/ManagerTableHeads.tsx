import { TableHead, TableRow } from "@/components/ui/table";

function TableHeads() {
  return (
    <TableRow>
      <TableHead className="min-w-40">Transaction</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Type</TableHead>
      <TableHead className="text-right">Amount</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  );
}

export default TableHeads;
