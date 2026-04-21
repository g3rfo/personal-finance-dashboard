import ChangeOrDelete from "@/components/ui/custom/ChangeOrDelete";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldTitle,
} from "@/components/ui/field";
import { CategoriesContext } from "@/context/categoryContext";
import { useContext } from "react";

interface CategoryProps {
  id: string;
  name: string;
  budget: number;
  icon: React.ComponentType<{ color: string; size: number }>;
  color: string;
}

function CategoryCard({ id, name, budget, icon, color }: CategoryProps) {
  const { onEditHandler, onDeleteHandler } =
    useContext(CategoriesContext) || {};
  if (!onEditHandler || !onDeleteHandler) {
    return null;
  }

  const IconComponent = icon;
  return (
    <Field id={id} className="flex-row gap-2 border rounded-xl p-4">
      <FieldGroup className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            style={{ backgroundColor: `${color}1A` }}
            className={`flex justify-center items-center rounded-md size-12`}
          >
            <IconComponent color={color} size={28} />
          </div>
          <div className="flex flex-col gap-1">
            <FieldTitle>{name}</FieldTitle>
            <FieldDescription className="text-[#4B5563] text-sm">
              Budget: ${budget.toFixed(2)}/month
            </FieldDescription>
          </div>
        </div>
      </FieldGroup>
      <FieldContent>
        <ChangeOrDelete
          onEdit={() => onEditHandler(id)}
          onDelete={() => onDeleteHandler(id)}
        />
      </FieldContent>
    </Field>
  );
}

export default CategoryCard;
