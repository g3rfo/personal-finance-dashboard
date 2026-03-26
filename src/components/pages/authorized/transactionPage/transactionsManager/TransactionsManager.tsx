import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ManagerHeader from "./managerHeader/ManagerHeader";
import ManagerContent from "./transactionsManagerTable/TransactionsManagerTable";
import useTransactionsManager from "@/hooks/useTransactionsManager";

function TransactionsManager() {
  useTransactionsManager();

  return (
    <Card className="min-w-135">
      <CardHeader>
        <ManagerHeader />
      </CardHeader>
      <CardContent>
        <ManagerContent />
      </CardContent>
    </Card>
  );
}

export default TransactionsManager;
