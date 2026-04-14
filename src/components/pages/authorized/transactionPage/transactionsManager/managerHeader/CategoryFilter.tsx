import { FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch } from "@/features/store/hooks";
import { setCategoryFilter } from "@/features/store/slices/transactionsFilterSlice";
import useCategoryFilter from "@/hooks/transactions/useCategoryFilter";

function CategoryFilter() {
  const { category, categories } = useCategoryFilter();
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-2">
      <FieldLabel htmlFor="category-filter" className="text-sm font-medium">
        Category:
      </FieldLabel>
      <Select
        defaultValue={categories[0]}
        value={category}
        onValueChange={(value) => dispatch(setCategoryFilter(value))}
      >
        <SelectTrigger id="category-filter">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategoryFilter;
