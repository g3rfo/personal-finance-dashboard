import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

function RecentTransactionsHeader() {
  return (
    <CardHeader className="flex justify-between">
      <CardTitle className="text-lg">Recent Transactions</CardTitle>
      <Button
        variant="outline"
        size="sm"
        className="text-[#374151] border-none shadow-none"
      >
        <Link to="/transactions">View All</Link>
      </Button>
    </CardHeader>
  );
}

export default RecentTransactionsHeader;
