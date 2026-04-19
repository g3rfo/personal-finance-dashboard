import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/ui/Loading";
import useBudgetOverview from "@/hooks/dashboard/useBudgetOverview";
import BudgetOverviewContent from "./BudgetOverviewContent";
import Error from "@/components/ui/Error";
import DashboardListCard from "../DashboardListCard";
import { BudgetOverviewContext } from "@/context/budgetOverviewContext";

function BudgetOverview() {
  const context = useBudgetOverview();
  const Provider = BudgetOverviewContext.Provider;
  const { loading, error } = context;

  return (
    <DashboardListCard
      header={
        <CardHeader className="flex h-8">
          <CardTitle className="text-lg">Budget Overview</CardTitle>
        </CardHeader>
      }
      content={
        <Provider value={context}>
          <CardContent className="flex flex-col gap-2 px-2">
            {loading && <Loading />}
            {error && <Error message={error} />}
            {!loading && !error && <BudgetOverviewContent />}
          </CardContent>
        </Provider>
      }
    />
  );
}

export default BudgetOverview;
