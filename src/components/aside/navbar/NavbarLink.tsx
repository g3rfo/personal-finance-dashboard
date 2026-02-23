import { Link } from "react-router-dom";
import { Button } from "../../ui/button";

function NavbarLink({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      variant="ghost"
      size="xl"
      data-icon="inline-start"
      className="justify-start w-full box-border"
      asChild
    >
      <Link to={path}>{children}</Link>
    </Button>
  );
}

export default NavbarLink;
