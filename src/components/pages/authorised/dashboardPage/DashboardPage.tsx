import PageHeader from "../header/PageHeader";
import HeaderButton from "../header/HeaderButton";
import { IconPlus } from "@tabler/icons-react";
import HeaderTitle from "../header/HeaderTitle";
import Stats from "./Stats";

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
    </>
  );
}

export default DashboardPage;
