import type { ChartConfig } from "@/components/ui/chart";

export const formatPieChartData = (
  categoriesChartData: ChartConfig,
  transactionsValues: Record<string, number>,
) => {
  const chartDataArray =
    Object.entries(categoriesChartData)
      ?.filter((c) => transactionsValues?.[c[1].label as string] !== undefined)
      .map((c) => {
        const category = c[1].label as string;
        const color = c[1].color as string;
        const amount = Number((transactionsValues?.[category] || 0));
        return {
          category,
          fill: color,
          amount,
        };
      }) ?? [];

  return chartDataArray;
};
