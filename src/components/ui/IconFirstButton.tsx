import { IconPlus } from "@tabler/icons-react";
import { Button } from "./button";

export interface IconFirstButtonProps extends React.ComponentProps<
  typeof Button
> {
  title?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

function IconFirstButton({ title, icon, children, ...props }: IconFirstButtonProps) {
  return (
    <Button {...props}>
      {icon || <IconPlus />} {title || ""}
      {children || null}
    </Button>
  );
}

export default IconFirstButton;
