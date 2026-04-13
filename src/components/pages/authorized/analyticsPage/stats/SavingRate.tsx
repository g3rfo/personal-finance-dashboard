import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAppSelector } from "@/features/store/hooks";
import { selectSavingsRate } from "@/features/store/selectors/transactionsSelectors";
import { Percent } from "lucide-react";

function SavingRate() {
  const savingRate = useAppSelector(selectSavingsRate);

  return (
    <Card className="flex-row min-w-85 gap-0">
      <div className="flex flex-col flex-1">
        <CardHeader>Savings Rate</CardHeader>
        <CardContent className="text-3xl font-bold text-primary">
          {savingRate.toFixed(1)}%
        </CardContent>
      </div>
      <CardContent className="text-3xl font-bold text-primary">
        <div className="size-12 flex items-center justify-center rounded-full bg-primary/20">
          <Percent size={28} />
        </div>
      </CardContent>
    </Card>
  );
}

export default SavingRate;
