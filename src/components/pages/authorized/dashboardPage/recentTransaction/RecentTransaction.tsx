import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import TransactionCard from "./TransactionCard";
import { useAppSelector } from "@/features/store/hooks";
import { selectCategoriesDataForTransactions } from "@/features/store/selectors/categoriesSelectors";
import { CATEGORY_ICONS } from "@/constants/categoryIcons";
import { CATEGORY_COLORS } from "@/constants/categoryColors";

function RecentTransactions() {
  const { transactions, loading, error } = useAppSelector(
    (state) => state.transactions,
  );
  const categoryData =
    useAppSelector(selectCategoriesDataForTransactions) || {};

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
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && transactions?.length === 0 && (
          <p className="text-center">No transactions yet</p>
        )}
        {!loading &&
          !error &&
          transactions?.map((transaction) =>
            (() => {
              const transactionCategoryData =
                categoryData[transaction.category];
              const iconName = transactionCategoryData?.iconName ?? "shopping";
              const colorName = transactionCategoryData?.color ?? "gray";

              return (
                <TransactionCard
                  key={transaction.id}
                  name={transaction.name}
                  date={transaction.date}
                  amount={transaction.amount}
                  type={transaction.type}
                  icon={CATEGORY_ICONS[iconName]}
                  categoryColor={CATEGORY_COLORS[colorName] ?? "#6B7280"}
                />
              );
            })(),
          )}
      </CardContent>
    </Card>
  );
}

export default RecentTransactions;
