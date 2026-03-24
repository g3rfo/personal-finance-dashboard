import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ManagerHeader from "./managerHeader/ManagerHeader";

function TransactionsManager() {
  return (
    <Card>
      <CardHeader>
        <ManagerHeader />
      </CardHeader>
      <CardContent>
        Here you can manage your transactions. Add, edit, or delete your income
        and expenses to keep track of your finances effectively.
      </CardContent>
    </Card>
  );
}

export default TransactionsManager;
