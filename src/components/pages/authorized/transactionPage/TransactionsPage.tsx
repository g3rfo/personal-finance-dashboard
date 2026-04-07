import Popup from "@/components/ui/Popup";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import TransactionsManager from "./transactionsManager/TransactionsManager";
import TransactionFormContent from "@/components/ui/forms/TransactionFormContent";
import PageLayout from "../PageLayout";

function TransactionsPage() {
  return (
    <PageLayout
      title="Transactions"
      description="Manage all your income and expenses"
      popup={
        <Popup
          trigger={
            <Button>
              <IconPlus /> Add Transaction
            </Button>
          }
          title="Add Transaction"
          description=""
          content={<TransactionFormContent type="create" />}
        />
      }
      content={<TransactionsManager />}
    />
  );
}

export default TransactionsPage;
