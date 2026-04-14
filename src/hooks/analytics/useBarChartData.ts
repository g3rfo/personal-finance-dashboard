import { AnalyticsContext } from "@/context/analyticsContext";
import { getSixMonth } from "@/utils/getSixMonth";
import { useContext } from "react";

function useBarChartData() {
  const { value } = useContext(AnalyticsContext);

  const chartData = [
    ...getSixMonth().map((month, index) => ({
      month,
      income: value.income[index],
      expenses: value.expenses[index],
    })),
  ];
  return { chartData };
}

export default useBarChartData;
