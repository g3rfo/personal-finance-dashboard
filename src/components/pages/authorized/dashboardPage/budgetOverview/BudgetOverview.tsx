import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Category from "./Category";
import { IconBarbell, IconBeach, IconBooks, IconCar, IconCarCrash, IconChartLine, IconCreditCardPay, IconDeviceGamepad, IconDevicesPc, IconFireExtinguisher, IconGift, IconHealthRecognition, IconHomeDollar, IconPaw, IconPerfume, IconPigMoney, IconRollerSkating, IconShoppingCart, IconTax, IconToolsKitchen2 } from "@tabler/icons-react";

const categoryIcons = {
  housing: IconHomeDollar,
  food: IconToolsKitchen2,
  transport: IconCar,
  healthcare: IconHealthRecognition,
  insurance: IconCarCrash,
  debtPayments: IconCreditCardPay,
  savings: IconPigMoney,
  investments: IconChartLine,
  education: IconBooks,
  shopping: IconShoppingCart,
  entertainment: IconDeviceGamepad,
  travel: IconBeach,
  sport: IconBarbell,
  personalCare: IconPerfume,
  gifts: IconGift,
  pets: IconPaw,
  taxes: IconTax,
  technology: IconDevicesPc,
  hobbies: IconRollerSkating,
  emergency: IconFireExtinguisher,
};

function BudgetOverview() {
  return (
    <Card className="flex-1 min-w-135">
      <CardHeader>
        <CardTitle className="text-lg">Budget Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Category name="Housing" spent={1200} budget={2000} icon={categoryIcons["housing"]} color="#F59E0B" />
        <Category name="Transportation" spent={400} budget={1000} icon={categoryIcons["transport"]} color="#EF4444" />
        <Category name="Food" spent={500} budget={600} icon={categoryIcons["food"]} color="#8B5CF6" />
        <Category name="Healthcare" spent={300} budget={500} icon={categoryIcons["healthcare"]} color="#10B981" />
        <Category name="Entertainment" spent={150} budget={300} icon={categoryIcons["entertainment"]} color="#3B82F6" />
        <Category name="Savings" spent={800} budget={1000} icon={categoryIcons["savings"]} color="#16A34A" />
        <Category name="Insurance" spent={200} budget={400} icon={categoryIcons["insurance"]} color="#8B5CF6" />
        <Category name="Debt Payments" spent={300} budget={500} icon={categoryIcons["debtPayments"]} color="#EF4444" />
        <Category name="Education" spent={250} budget={400} icon={categoryIcons["education"]} color="#3B82F6" />
      </CardContent>
    </Card>
  );
}

export default BudgetOverview;