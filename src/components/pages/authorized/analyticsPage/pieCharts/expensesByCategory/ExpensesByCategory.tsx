import PieChartCard from "../PieChartCard";
import ExpensesByCategoryContent from "./ExpensesByCategoryContent";

function ExpensesByCategory() {
  return (
    <PieChartCard title="Expenses by Category">
      <ExpensesByCategoryContent />
    </PieChartCard>
  );
}

export default ExpensesByCategory;
