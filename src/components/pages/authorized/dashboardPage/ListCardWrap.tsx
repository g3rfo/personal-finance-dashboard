import { Card } from "@/components/ui/card";

function ListCardWrap({ children }: { children: React.ReactNode }) {
  return <Card className="flex-1 min-w-135 h-[70vh]">{children}</Card>;
}

export default ListCardWrap;
