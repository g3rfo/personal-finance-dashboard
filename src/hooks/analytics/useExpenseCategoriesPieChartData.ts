import { useAppSelector } from "@/features/store/hooks";
import { selectExpenseCategoriesPieChartConfigData } from "@/features/store/selectors/categoriesSelectors";
import {
  selectCategoriesAmountsByType,
  selectExpensesTransactionsValues,
} from "@/features/store/selectors/transactionsSelectors";
import { formatPieChartData } from "@/utils/formatePieChartData";

function useExpenseCategoriesPieChartData() {
  const expenseCategoriesChartData = useAppSelector(
    selectExpenseCategoriesPieChartConfigData,
  );

  const { totalExpenses } = useAppSelector(selectCategoriesAmountsByType);
  const expensesTransactionsValues = useAppSelector(
    selectExpensesTransactionsValues,
  );

  const chartData = formatPieChartData(
    expenseCategoriesChartData,
    expensesTransactionsValues,
  );

  return { chartData, totalExpenses };
}

export default useExpenseCategoriesPieChartData;
