import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/ui/Loading";
import useBudgetOverview from "@/hooks/dashboard/useBudgetOverview";
import BudgetOverviewContent from "./BudgetOverviewContent";
import Error from "@/components/ui/Error";
import DashboardListCard from "../DashboardListCard";

function BudgetOverview() {
  const { loading, error } = useBudgetOverview();

  return (
    <DashboardListCard
      header={
        <CardHeader className="flex h-8">
          <CardTitle className="text-lg">Budget Overview</CardTitle>
        </CardHeader>
      }
      content={
        <CardContent className="flex flex-col gap-2 px-2">
          {loading && <Loading />}
          {error && <Error message={error} />}
          {!loading && !error && <BudgetOverviewContent />}
        </CardContent>
      }
    />
  );
}

export default BudgetOverview;
