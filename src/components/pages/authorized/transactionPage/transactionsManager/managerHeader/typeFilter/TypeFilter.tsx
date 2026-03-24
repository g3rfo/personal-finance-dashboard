import TypeButton from "./TypeButton";
import type { TransactionType } from "@/types/transaction.type";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import { setTypeFilter } from "@/features/store/slices/transactionsFilterSlice";

function TypeFilter() {
  const types = ["All", "Income", "Expense"] as TransactionType[];
  const color = "primary";
  const { type } = useAppSelector((state) => state.transactionsFilter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-2">
      {types.map((t) => (
        <TypeButton
          key={t}
          type={t}
          isSelected={type === t}
          selectedColor={color}
          onClick={() => {
            dispatch(setTypeFilter(t));
          }}
        />
      ))}
    </div>
  );
}

export default TypeFilter;
