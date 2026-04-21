import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IconFirstButton from "@/components/ui/custom/IconFirstButton";
import { type IconFirstButtonProps } from "@/components/ui/custom/IconFirstButton";

interface ManagerCardProps {
  cardTitle: string;
  description: string;
  className?: string;
  buttonProps?: IconFirstButtonProps;
}

function ManagerCard({
  cardTitle,
  description,
  className,
  buttonProps,
}: ManagerCardProps) {
  return (
    <Card
      className={`flex-row justify-between items-center py-4 ${className || ""}`}
    >
      <CardHeader className="flex-1 gap-1">
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <IconFirstButton {...buttonProps} />
      </CardContent>
    </Card>
  );
}

export default ManagerCard;
