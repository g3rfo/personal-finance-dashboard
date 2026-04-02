import Popup from "@/components/ui/Popup";
import HeaderTitle from "../header/HeaderTitle";
import PageHeader from "../header/PageHeader";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import TransactionsManager from "./transactionsManager/TransactionsManager";
import TransactionFormContent from "@/components/ui/forms/TransactionFormContent";

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
          content={<TransactionFormContent />}
        />
      </PageHeader>
      <TransactionsManager />
    </>
  );
}

export default TransactionsPage;
