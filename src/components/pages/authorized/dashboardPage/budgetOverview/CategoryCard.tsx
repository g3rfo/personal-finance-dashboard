import {
  Field,
  FieldContent,
  FieldGroup,
  FieldTitle,
} from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

interface CategoryProps {
  id: string;
  name: string;
  type: "income" | "expense";
  spent: number;
  budget: number;
  icon: React.ComponentType<{ color: string; size: number }>;
  color: string;
}

function CategoryCard({
  id,
  name,
  type,
  spent,
  budget,
  icon,
  color,
}: CategoryProps) {
  const IconComponent = icon;
  const progressValue = (spent / budget) * 100;
  let progressColor: string;

  if (type === "expense") {
    progressColor =
      progressValue < 80
        ? `#16A34A`
        : progressValue < 100
          ? `#F59E0B`
          : `#EF4444`;
  } else {
    progressColor =
      progressValue < 80
        ? `#EF4444`
        : progressValue < 100
          ? `#F59E0B`
          : `#16A34A`;
  }

  return (
    <Field className="gap-2">
      <FieldGroup className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            style={{ backgroundColor: `${color}1A` }}
            className={`flex justify-center items-center rounded-md w-8 h-8`}
          >
            <IconComponent color={color} size={24} />
          </div>
          <FieldTitle>{name}</FieldTitle>
        </div>
        <FieldTitle className="text-[#4B5563]">
          ${spent.toFixed(2)} / ${budget.toFixed(2)}
        </FieldTitle>
      </FieldGroup>
      <FieldContent id={`${id}-progress`}>
        <Progress
          id={`${id}-progress`}
          color={progressColor}
          value={progressValue > 100 ? 100 : progressValue}
        />
      </FieldContent>
    </Field>
  );
}

export default CategoryCard;
