import {
  Field,
  FieldContent,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

interface CategoryProps {
  name: string;
  spent: number;
  budget: number;
  icon: React.ComponentType<{ color: string; size: number }>;
  color: string;
}

function CategoryCard({ name, spent, budget, icon, color }: CategoryProps) {
  const IconComponent = icon;
  const progressValue = (spent / budget) * 100;
  const progressColor =
    progressValue < 80
      ? `#16A34A`
      : progressValue < 100
        ? `#F59E0B`
        : `#EF4444`;

  return (
    <Field className="gap-2">
      <FieldLabel className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            style={{ backgroundColor: `${color}1A` }}
            className={`bg-[${color}] flex justify-center items-center rounded-md w-8 h-8`}
          >
            <IconComponent color={color} size={24} />
          </div>
          <FieldTitle>{name}</FieldTitle>
        </div>
        <div className="text-[#4B5563]">
          ${spent.toFixed(2)} / ${budget.toFixed(2)}
        </div>
      </FieldLabel>
      <FieldContent>
        <Progress
          color={progressColor}
          value={progressValue > 100 ? 100 : progressValue}
        />
      </FieldContent>
    </Field>
  );
}

export default CategoryCard;
