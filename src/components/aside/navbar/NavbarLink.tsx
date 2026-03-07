import { Link } from "react-router-dom";
import { Button } from "../../ui/button";

interface NavbarLinkProps {
  path: string;
  children: React.ReactNode;
}

function NavbarLink({ path, children }: NavbarLinkProps) {
  const isActive = window.location.pathname === path;

  return (
    <Button
      variant="ghost"
      size="xl"
      data-icon="inline-start"
      className={`justify-start w-full box-border ${isActive ? "text-primary bg-primary/10 hover:text-primary hover:bg-primary/10" : ""}`}
      asChild
    >
      <Link to={path}>{children}</Link>
    </Button>
  );
}

export default NavbarLink;
