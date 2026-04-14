import { AnalyticsContext } from "@/context/analyticsContext";
import { getSixMonth } from "@/utils/getSixMonth";
import { useContext } from "react";

function useLineChartData() {
  const { value } = useContext(AnalyticsContext);

  const chartData = [
    ...getSixMonth().map((month, index) => ({
      month,
      income: value.income[index],
      expenses: value.expenses[index],
      balance: value.balance[index],
    })),
  ];

  return { chartData };
}

export default useLineChartData;
