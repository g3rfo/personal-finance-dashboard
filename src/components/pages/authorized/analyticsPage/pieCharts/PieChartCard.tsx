import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import { type ChartConfig } from "@/components/ui/chart";

interface PieChartCardProps {
  title: string;
  chartConfig: ChartConfig;
  chartData: Array<{
    category: string;
    amount: number;
    fill: string;
  }>;
  totalAmount?: number;
}

function PieChartCard({
  title,
  chartConfig,
  chartData,
  totalAmount,
}: PieChartCardProps) {
  return (
    <Card className="flex-col min-w-145 flex-1 p-6">
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardContent className="flex-1 p-0">
        <ChartContainer
          config={chartConfig}
          className="max-h-60 w-full pb-0 [&_.recharts-pie-label-text]:fill [&_.recharts-pie-label-text]:font-medium [&_.recharts-sector]:outline-2 [&_.recharts-sector[stroke='#fff']]:stroke-white"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="amount"
              label={({ value, name }) =>
                `${name} ${((value / (totalAmount || 1)) * 100).toFixed(2)}%`
              }
              outerRadius={90}
              labelLine={false}
              nameKey="category"
              fontSize={14}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default PieChartCard;
