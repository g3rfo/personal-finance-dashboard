import Outline from "../../ui/custom/Outline";
import NavbarContent from "./NavbarContent";

function Navbar() {
  return (
    <>
      <Outline className="p-4 flex-1 items-start">
        <nav className="w-full flex flex-col gap-2">
          <NavbarContent />
        </nav>
      </Outline>
    </>
  );
}

export default Navbar;
