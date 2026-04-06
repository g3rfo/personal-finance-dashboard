import { CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ListCardWrap from "./ListCardWrap";

interface DashboardListCardProps {
  header: React.ReactNode;
  content: React.ReactNode;
}

function DashboardListCard({ header, content }: DashboardListCardProps) {
  return (
    <ListCardWrap>
      {header}
      <CardContent className="overflow-hidden">
        <ScrollArea className="h-full flex flex-col gap-2 px-3">
          {content}
        </ScrollArea>
      </CardContent>
    </ListCardWrap>
  );
}

export default DashboardListCard;
