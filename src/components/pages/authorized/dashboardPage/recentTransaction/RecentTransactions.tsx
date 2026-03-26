import { Card, CardContent } from "@/components/ui/card";
import Loading from "@/components/ui/Loading";
import ViewMore from "@/components/ui/ViewMore";
import Error from "@/components/ui/Error";
import useRecentTransactions from "@/hooks/useRecentTransactions";
import RecentTransactionsHeader from "./RecentTransactionsHeader";
import RecentTransactionsContent from "./RecentTransactionsContent";

function RecentTransactions() {
  const { loading, error, viewMoreHandler, hasNextPage } =
    useRecentTransactions();

  return (
    <Card className="flex-1 min-w-135">
      <RecentTransactionsHeader />
      <CardContent className="flex flex-col gap-2">
        {loading && <Loading />}
        {error && <Error message={error} />}
        {!loading && !error && <RecentTransactionsContent />}
        {hasNextPage && !loading && !error && (
          <ViewMore viewMoreHandler={viewMoreHandler} />
        )}
      </CardContent>
    </Card>
  );
}

export default RecentTransactions;
