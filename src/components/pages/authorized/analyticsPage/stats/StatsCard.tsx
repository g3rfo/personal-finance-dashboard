import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  content: {
    value: string;
    color?: string;
  };
  icon: {
    component: React.ComponentType<{ size?: number }>;
    color: string;
  };
}

function StatsCard({ title, content, icon }: StatsCardProps) {
  const Icon = icon.component;
  return (
    <Card className="flex-row min-w-85 flex-1 gap-0">
      <div className="flex flex-col flex-1">
        <CardHeader>{title}</CardHeader>
        <CardContent
          className="text-3xl font-bold"
          style={{ color: content.color ? content.color : "inherit" }}
        >
          {content.value}
        </CardContent>
      </div>
      <CardContent className="text-3xl font-bold" style={{ color: icon.color }}>
        <div
          className="size-12 flex items-center justify-center rounded-full"
          style={{ backgroundColor: `${icon.color}33` }}
        >
          <Icon size={28} />
        </div>
      </CardContent>
    </Card>
  );
}

export default StatsCard;
