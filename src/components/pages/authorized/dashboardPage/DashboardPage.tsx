import PageHeader from "../header/PageHeader";
import HeaderButton from "../header/HeaderButton";
import { IconPlus } from "@tabler/icons-react";
import HeaderTitle from "../header/HeaderTitle";
import Stats from "./stats/Stats";
import BudgetOverview from "./budgetOverview/BudgetOverview";
import { useEffect } from "react";
import { fetchCategories } from "@/features/store/asyncThunks/categoriesThunks";
import { useAppDispatch } from "@/features/store/hooks";

function DashboardPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

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
