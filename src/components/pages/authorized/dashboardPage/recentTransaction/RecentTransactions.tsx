import Loading from "@/components/ui/Loading";
import ViewMore from "@/components/ui/ViewMore";
import Error from "@/components/ui/Error";
import useRecentTransactions from "@/hooks/dashboard/useRecentTransactions";
import RecentTransactionsHeader from "./RecentTransactionsHeader";
import RecentTransactionsContent from "./RecentTransactionsContent";
import DashboardListCard from "../DashboardListCard";

function RecentTransactions() {
  const { loading, error, viewMoreHandler, hasNextPage } =
    useRecentTransactions();

  return (
    <DashboardListCard
      header={<RecentTransactionsHeader />}
      content={
        <>
          {loading && <Loading />}
          {error && <Error message={error} />}
          {!loading && !error && <RecentTransactionsContent />}
          {hasNextPage && !loading && !error && (
            <ViewMore viewMoreHandler={viewMoreHandler} />
          )}
        </>
      }
    />
  );
}

export default RecentTransactions;
