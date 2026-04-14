import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import useLineChartData from "@/hooks/analytics/useLineChartData";
import useChartConfig from "@/hooks/analytics/useChartConfig";

function TrendLineChart() {
  const { chartData } = useLineChartData();
  const { chartConfig } = useChartConfig();

  return (
    <ChartContainer className="w-full h-60" config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
          top: 12,
          bottom: 12,
        }}
      >
        <CartesianGrid vertical={true} />
        <YAxis />
        <XAxis
          dataKey="month"
          tickLine={true}
          axisLine={true}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="income"
          type="monotone"
          stroke="#16A34A"
          strokeWidth={2}
          dot={true}
        />
        <Line
          dataKey="expenses"
          type="monotone"
          stroke="#DC2626"
          strokeWidth={2}
          dot={true}
        />
        <Line
          dataKey="balance"
          type="monotone"
          stroke="#3B82F6"
          strokeWidth={2}
          dot={true}
        />
        <ChartLegend content={<ChartLegendContent />} />
      </LineChart>
    </ChartContainer>
  );
}

export default TrendLineChart;
