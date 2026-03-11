import PageHeader from "../header/PageHeader";
import HeaderButton from "../header/HeaderButton";
import { IconPlus } from "@tabler/icons-react";
import HeaderTitle from "../header/HeaderTitle";
import Stats from "./stats/Stats";
import BudgetOverview from "./budgetOverview/BudgetOverview";

function DashboardPage() {
  return (
    <>
      <PageHeader>
        <HeaderTitle
          title="Dashboard"
          description="Welcome back! Here's your financial overview"
        />
        <HeaderButton>
          <IconPlus /> Add Transaction
        </HeaderButton>
      </PageHeader>
      <Stats />
      <div className="flex flex-wrap gap-4">
        <BudgetOverview />
      </div>
    </>
  );
}

export default DashboardPage;
