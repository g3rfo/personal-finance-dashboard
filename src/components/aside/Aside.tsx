import Logo from "./Logo";
import Navbar from "./navbar/Navbar";
import UserData from "./UserData";

function Aside() {
  return (
    <aside className="fixed z-10 w-63.5 h-full flex flex-col bg-white">
      <Logo />
      <Navbar />
      <UserData />
    </aside>
  );
}

export default Aside;
