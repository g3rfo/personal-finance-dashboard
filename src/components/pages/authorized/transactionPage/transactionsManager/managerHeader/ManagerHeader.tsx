import CategoryFilter from "./CategoryFilter";
import MonthFilter from "./MonthFilter";
import TypeFilter from "./typeFilter/TypeFilter";

function ManagerHeader() {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center justify-between gap-4">
        <MonthFilter />
        <CategoryFilter />
      </div>
      <TypeFilter />
    </div>
  );
}

export default ManagerHeader;
