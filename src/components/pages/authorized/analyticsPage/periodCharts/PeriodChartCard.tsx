import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PeriodChartCardProps {
  title: string;
  content: React.ReactNode;
}

function PeriodChartCard({ title, content }: PeriodChartCardProps) {
  return (
    <Card className="flex-col min-w-145 flex-1">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

export default PeriodChartCard;
