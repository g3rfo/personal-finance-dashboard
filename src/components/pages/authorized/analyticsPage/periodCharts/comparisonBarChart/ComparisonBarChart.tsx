import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useBarChartData from "@/hooks/analytics/useBarChartData";
import useChartConfig from "@/hooks/analytics/useChartConfig";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

function ComparisonBarChart() {
  const { chartData } = useBarChartData();
  const { chartConfig } = useChartConfig();

  return (
    <ChartContainer className="w-full h-60" config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <YAxis />
        <XAxis
          dataKey="month"
          tickLine={true}
          tickMargin={10}
          axisLine={true}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="income" fill="#16A34A" radius={4} />
        <Bar dataKey="expenses" fill="#DC2626" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

export default ComparisonBarChart;
