import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import TransactionCard from "./TransactionCard";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import { selectCategoriesDataForTransactions } from "@/features/store/selectors/categoriesSelectors";
import { CATEGORY_ICONS } from "@/constants/categoryIcons";
import { CATEGORY_COLORS } from "@/constants/categoryColors";
import { formatToOutputDate } from "@/utils/dateFormatters";
import { FieldSeparator } from "@/components/ui/field";
import { fetchTransactions } from "@/features/store/asyncThunks/transactionsThunks";
import Loading from "@/components/ui/Loading";

function RecentTransactions() {
  const { error } = useAppSelector((state) => state.transactions);
  const { transactions, page, hasNextPage, loading } = useAppSelector(
    (state) => state.transactions.paginated,
  );
  const categoryData =
    useAppSelector(selectCategoriesDataForTransactions) || {};

  const dispatch = useAppDispatch();

  const viewMoreHandler = () => {
    dispatch(fetchTransactions(page + 1));
  };

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
        {loading && <Loading />}
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
              const colorName = transactionCategoryData?.color ?? "pink";

              return (
                <TransactionCard
                  key={transaction.id}
                  name={transaction.name}
                  date={formatToOutputDate(transaction.date)}
                  amount={transaction.amount}
                  type={transaction.type}
                  icon={CATEGORY_ICONS[iconName]}
                  categoryColor={CATEGORY_COLORS[colorName]}
                />
              );
            })(),
          )}
      </CardContent>
      {hasNextPage && (
        <CardFooter className="flex justify-center">
          <FieldSeparator className="flex-1" />
          <Button
            variant="outline"
            size="sm"
            className="text-[#374151] border-none shadow-none"
            onClick={viewMoreHandler}
          >
            View More...
          </Button>
          <FieldSeparator className="flex-1" />
        </CardFooter>
      )}
    </Card>
  );
}

export default RecentTransactions;
