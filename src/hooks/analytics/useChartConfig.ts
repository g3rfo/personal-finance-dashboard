import type { ChartConfig } from "@/components/ui/chart";

function useChartConfig() {
  const chartConfig = {
    income: {
      label: "Income",
      color: "#16A34A",
    },
    expenses: {
      label: "Expenses",
      color: "#DC2626",
    },
    balance: {
      label: "Balance",
      color: "#3B82F6",
    },
  } satisfies ChartConfig;

  return { chartConfig };
}

export default useChartConfig;
