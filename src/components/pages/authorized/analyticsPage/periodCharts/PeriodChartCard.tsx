import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PeriodChartCardProps {
  title: string;
  content: React.ReactNode;
}

function PeriodChartCard({ title, content }: PeriodChartCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

export default PeriodChartCard;
