import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

interface PieChartProps {
  chartConfig: ChartConfig;
  chartData: Array<{
    category: string;
    amount: number;
    fill: string;
  }>;
  totalAmount?: number;
}

function PieChartComponent({
  chartConfig,
  chartData,
  totalAmount,
}: PieChartProps) {
  return (
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
  );
}

export default PieChartComponent;
