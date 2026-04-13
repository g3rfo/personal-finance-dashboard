import { CategoryFormContext } from "@/context/categoryFormContext";
import type useCategoryForm from "@/hooks/categoryForm/useCategoryForm";
import { useContext } from "react";
import InputCard from "./InputCard";
import { RadioGroup, RadioGroupItem } from "../../radio-group";
import { CATEGORY_ICONS } from "@/constants/categoryIcons";
import { Controller } from "react-hook-form";

function IconInput() {
  const { control } = useContext(CategoryFormContext) as ReturnType<
    typeof useCategoryForm
  >;

  return (
    <InputCard
      label="Icon"
      context={CategoryFormContext}
      children={
        <Controller
          name="iconName"
          control={control}
          render={({ field }) => (
            <RadioGroup
              id="icon"
              className="grid grid-cols-6 gap-2"
              value={field.value}
              onValueChange={field.onChange}
            >
              {Object.entries(CATEGORY_ICONS).map(([key, icon]) => {
                const IconComponent = icon;

                return (
                  <div
                    key={key}
                    className="w-full h-full flex justify-center items-center m-0 p-0 box-border"
                  >
                    <RadioGroupItem
                      value={key}
                      id={`radio-${key}`}
                      aria-label={`Choose ${key} icon`}
                      className="box-border flex justify-center items-center size-16 rounded-xl border-2 bg-background shadow-xs **:data-[slot=radio-group-indicator]:hidden data-[state=checked]:bg-primary/20 data-[state=checked]:border-primary/40"
                    >
                      <IconComponent size={32} color="#000000" />
                    </RadioGroupItem>
                  </div>
                );
              })}
            </RadioGroup>
          )}
        />
      }
    />
  );
}

export default IconInput;
