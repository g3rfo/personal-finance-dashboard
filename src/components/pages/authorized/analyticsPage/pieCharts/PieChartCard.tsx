import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface PieChartCardProps {
  title: string;
  children?: React.ReactNode;
}

function PieChartCard({ title, children }: PieChartCardProps) {
  return (
    <Card className="flex-col min-w-145 flex-1 p-6">
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardContent className="flex-1 p-0">{children}</CardContent>
    </Card>
  );
}

export default PieChartCard;
