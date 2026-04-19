import Loading from "@/components/ui/Loading";
import ViewMore from "@/components/ui/ViewMore";
import Error from "@/components/ui/Error";
import useRecentTransactions from "@/hooks/dashboard/useRecentTransactions";
import RecentTransactionsHeader from "./RecentTransactionsHeader";
import RecentTransactionsContent from "./RecentTransactionsContent";
import DashboardListCard from "../DashboardListCard";
import { RecentTransactionsContext } from "@/context/recentTransactionsContext";

function RecentTransactions() {
  const context = useRecentTransactions();
  const Provider = RecentTransactionsContext.Provider;
  const { loading, error, viewMoreHandler, hasNextPage } = context;

  return (
    <DashboardListCard
      header={<RecentTransactionsHeader />}
      content={
        <Provider value={context}>
          {loading && <Loading />}
          {error && <Error message={error} />}
          {!loading && !error && <RecentTransactionsContent />}
          {hasNextPage && !loading && !error && (
            <ViewMore viewMoreHandler={viewMoreHandler} />
          )}
        </Provider>
      }
    />
  );
}

export default RecentTransactions;
