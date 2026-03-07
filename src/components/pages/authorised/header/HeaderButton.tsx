import { Button } from "@/components/ui/button";

function HeaderButton({children}: {children: React.ReactNode}) {
  return (
    <Button>{children}</Button>
  );
}

export default HeaderButton;