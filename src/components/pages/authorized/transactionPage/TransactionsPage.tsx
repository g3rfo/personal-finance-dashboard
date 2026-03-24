import Popup from "@/components/ui/Popup";
import HeaderTitle from "../header/HeaderTitle";
import PageHeader from "../header/PageHeader";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import AddTransactionFormContent from "../dashboardPage/addTransactions/AddTransactionFormContent";
import TransactionsManager from "./transactionsManager/TransactionsManager";

function TransactionsPage() {
  return (
    <>
      <PageHeader>
        <HeaderTitle
          title="Transactions"
          description="Manage all your income and expenses"
        />
        <Popup
          trigger={
            <Button>
              <IconPlus /> Add Transaction
            </Button>
          }
          title="Add Transaction"
          description=""
          content={<AddTransactionFormContent />}
        />
      </PageHeader>
      <TransactionsManager />
    </>
  );
}

export default TransactionsPage;
