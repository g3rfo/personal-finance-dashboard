import { useAppSelector } from "@/features/store/hooks";
import { selectIncomeCategoriesPieChartConfigData } from "@/features/store/selectors/categoriesSelectors";
import {
  selectCategoriesAmountsByType,
  selectIncomeTransactionsValues,
} from "@/features/store/selectors/transactionsSelectors";
import { formatPieChartData } from "@/utils/formatePieChartData";

function useIncomeCategoriesPieChartData() {
  const incomeCategoriesChartData = useAppSelector(
    selectIncomeCategoriesPieChartConfigData,
  );
  const { totalIncome } = useAppSelector(selectCategoriesAmountsByType);
  const incomeTransactionsValues = useAppSelector(
    selectIncomeTransactionsValues,
  );

  const chartData = formatPieChartData(
    incomeCategoriesChartData,
    incomeTransactionsValues,
  );

  return { chartData, totalIncome };
}

export default useIncomeCategoriesPieChartData;
