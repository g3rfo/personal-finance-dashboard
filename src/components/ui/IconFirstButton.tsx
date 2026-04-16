import { IconPlus } from "@tabler/icons-react";
import { Button } from "./button";

export interface IconFirstButtonProps extends React.ComponentProps<
  typeof Button
> {
  title?: string;
  icon?: React.ReactNode;
}

function IconFirstButton({ title, icon, ...props }: IconFirstButtonProps) {
  return (
    <Button {...props}>
      {icon || <IconPlus />} {title || ""}
    </Button>
  );
}

export default IconFirstButton;
