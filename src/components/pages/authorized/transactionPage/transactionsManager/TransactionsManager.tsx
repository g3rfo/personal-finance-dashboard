import { CardContent, CardHeader } from "@/components/ui/card";
import ManagerHeader from "./managerHeader/ManagerHeader";
import ManagerContent from "./transactionsManagerTable/TransactionsManagerTable";
import useTransactionsManager from "@/hooks/useTransactionsManager";
import ListCardWrap from "../../dashboardPage/ListCardWrap";
import { ScrollArea } from "@/components/ui/scroll-area";

function TransactionsManager() {
  useTransactionsManager();

  return (
    <ListCardWrap>
      <CardHeader>
        <ManagerHeader />
      </CardHeader>
      <CardContent className="overflow-hidden">
        <ScrollArea className="h-full flex flex-col gap-2 pr-3">
          <ManagerContent />
        </ScrollArea>
      </CardContent>
    </ListCardWrap>
  );
}

export default TransactionsManager;
