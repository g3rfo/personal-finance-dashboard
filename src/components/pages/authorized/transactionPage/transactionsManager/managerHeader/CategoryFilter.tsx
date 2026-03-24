import { FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/features/store/hooks";
import { selectCategoriesNames } from "@/features/store/selectors/categoriesSelectors";
import { setCategoryFilter } from "@/features/store/slices/transactionsFilterSlice";

function CategoryFilter() {
  const categories = [
    "All Categories",
    ...useAppSelector(selectCategoriesNames),
  ];

  const { category } = useAppSelector((state) => state.transactionsFilter);

  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-2">
      <FieldLabel htmlFor="category" className="text-sm font-medium">
        Category:
      </FieldLabel>
      <Select
        defaultValue={categories[0]}
        value={category}
        onValueChange={(value) => dispatch(setCategoryFilter(value))}
      >
        <SelectTrigger id="category">
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
