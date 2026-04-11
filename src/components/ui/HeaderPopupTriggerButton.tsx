import { IconPlus } from "@tabler/icons-react";
import { Button } from "./button";

interface HeaderPopupTriggerButtonProps extends React.ComponentProps<
  typeof Button
> {
  title: string;
}

function HeaderPopupTriggerButton({
  title,
  ...props
}: HeaderPopupTriggerButtonProps) {
  return (
    <Button {...props}>
      <IconPlus /> {title}
    </Button>
  );
}

export default HeaderPopupTriggerButton;
