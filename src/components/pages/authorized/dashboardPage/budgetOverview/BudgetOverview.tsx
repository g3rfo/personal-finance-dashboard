import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/ui/Loading";
import useBudgetOverview from "@/hooks/useBudgetOverview";
import BudgetOverviewContent from "./BudgetOverviewContent";
import Error from "@/components/ui/Error";

function BudgetOverview() {
  const {loading, error} = useBudgetOverview();

  return (
    <Card className="flex-1 min-w-135">
      <CardHeader>
        <CardTitle className="text-lg">Budget Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {loading && <Loading />}
        {error && <Error message={error} />}
        {!loading && !error && <BudgetOverviewContent />}
      </CardContent>
    </Card>
  );
}

export default BudgetOverview;
