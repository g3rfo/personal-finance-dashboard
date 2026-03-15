import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import TransactionCard from "./TransactionCard";
import {
  IconCreditCardPay,
  IconShoppingCart,
  IconTax,
} from "@tabler/icons-react";

function RecentTransactions() {
  return (
    <Card className="flex-1 min-w-135">
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
      <CardContent className="flex flex-col gap-2">
        <TransactionCard
          name="Grocery Shopping"
          date="Mar 15, 2026"
          amount={150.0}
          type="EXPENSE"
          icon={IconShoppingCart}
          categoryColor="#EF4444"
        />
        <TransactionCard
          name="Salary"
          date="Mar 10, 2026"
          amount={3000.0}
          type="INCOME"
          icon={IconTax}
          categoryColor="#10B981"
        />
        <TransactionCard
          name="Electricity Bill"
          date="Mar 5, 2026"
          amount={100.0}
          type="EXPENSE"
          icon={IconCreditCardPay}
          categoryColor="#F59E0B"
        />
        {/* {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && categories?.map((category) => (
          
        ))} */}
      </CardContent>
    </Card>
  );
}

export default RecentTransactions;
