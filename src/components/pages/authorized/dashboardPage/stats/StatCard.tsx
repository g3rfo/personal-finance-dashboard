import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  content: {
    value: number;
    color: "INCOME" | "EXPENSES";
  };
  icon: React.ComponentType<{ className?: string }>;
}

function StatCard({ title, content, icon }: StatCardProps) {
  const Icon = icon;
  const primaryColor =
    content.color === "INCOME" ? "text-primary" : "text-destructive";
  const bgColor =
    content.color === "INCOME" ? "bg-primary/10" : "bg-destructive/10";
  return (
    <Card className="relative p-6.25 flex-1 min-w-85 gap-2">
      <CardHeader className="p-0 gap-0">
        <CardTitle className="text-sm font-medium text-[#4B5563]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent
        className={`p-0 text-3xl font-bold ${content.color === "INCOME" ? "text-primary" : "text-destructive"}`}
      >
        ${content.value.toFixed(2)}
      </CardContent>
      <CardContent
        className={`p-0 absolute top-[50%] translate-y-[-50%] right-6.25 text-[#6B7280] w-12 h-12 flex items-center justify-center rounded-full ${bgColor}`}
      >
        <Icon className={primaryColor} />
      </CardContent>
    </Card>
  );
}

export default StatCard;
