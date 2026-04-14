import type { ChartConfig } from "@/components/ui/chart";
import { useAppSelector } from "@/features/store/hooks";
import { selectExpenseCategoriesPieChartConfigData } from "@/features/store/selectors/categoriesSelectors";

function useExpenseCategoriesPieChartConfig() {
  return useAppSelector(
    selectExpenseCategoriesPieChartConfigData,
  ) as ChartConfig;
}

export default useExpenseCategoriesPieChartConfig;
