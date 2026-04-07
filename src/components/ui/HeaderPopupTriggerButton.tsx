import { IconPlus } from "@tabler/icons-react";
import { Button } from "./button";

function HeaderPopupTriggerButton({
  title,
  ...props
}: { title: string } & React.ComponentProps<typeof Button>) {
  return (
    <Button {...props}>
      <IconPlus /> {title}
    </Button>
  );
}

export default HeaderPopupTriggerButton;
