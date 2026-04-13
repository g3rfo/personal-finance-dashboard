import { CategoryFormContext } from "@/context/categoryFormContext";
import type useCategoryForm from "@/hooks/categoryForm/useCategoryForm";
import { useContext } from "react";
import InputCard from "./InputCard";
import { Controller } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../../radio-group";
import { CATEGORY_COLORS } from "@/constants/categoryColors";

function ColorInput() {
  const { control } = useContext(CategoryFormContext) as ReturnType<
    typeof useCategoryForm
  >;

  return (
    <InputCard
      label="Color"
      context={CategoryFormContext}
      children={
        <Controller
          name="color"
          control={control}
          render={({ field }) => (
            <RadioGroup
              id="color"
              className="grid grid-cols-6 gap-2"
              value={field.value}
              onValueChange={field.onChange}
            >
              {Object.entries(CATEGORY_COLORS).map(([key, color]) => {
                return (
                  <div
                    key={key}
                    className="w-full h-full flex justify-center items-center m-0 p-0 box-border"
                  >
                    <RadioGroupItem
                      value={key}
                      id={`radio-${key}`}
                      aria-label={`Choose ${key} icon`}
                      className={`box-border flex justify-center items-center size-16 rounded-xl border-2 shadow-xs **:data-[slot=radio-group-indicator]:hidden data-[state=checked]:border-[#000000]/40`}
                      style={{ backgroundColor: `${color}` }}
                    ></RadioGroupItem>
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

export default ColorInput;
