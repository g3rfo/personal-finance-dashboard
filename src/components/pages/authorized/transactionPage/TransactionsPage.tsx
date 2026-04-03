import Popup from "@/components/ui/Popup";
import HeaderTitle from "../header/HeaderTitle";
import PageHeader from "../header/PageHeader";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import TransactionsManager from "./transactionsManager/TransactionsManager";
import TransactionFormContent from "@/components/ui/forms/TransactionFormContent";
import type { TransactionFormType } from "@/types/transaction.type";

function TransactionsPage() {
  const type: TransactionFormType = "edit";

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
          content={<TransactionFormContent type={type} />}
        />
      </PageHeader>
      <TransactionsManager />
    </>
  );
}

export default TransactionsPage;
