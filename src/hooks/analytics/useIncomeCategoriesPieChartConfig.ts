import type { ChartConfig } from "@/components/ui/chart";
import { useAppSelector } from "@/features/store/hooks";
import { selectIncomeCategoriesPieChartConfigData } from "@/features/store/selectors/categoriesSelectors";

function useIncomeCategoriesPieChartConfig() {
  return useAppSelector(
    selectIncomeCategoriesPieChartConfigData,
  ) as ChartConfig;
}

export default useIncomeCategoriesPieChartConfig;
