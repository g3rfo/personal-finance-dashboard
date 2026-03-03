import Logo from "./Logo";
import Navbar from "./navbar/Navbar";
import UserData from "./UserData";

function Aside() {
  return (
    <aside className="w-63.5 h-full flex flex-col fixed bg-white">
      <Logo />
      <Navbar />
      <UserData />
    </aside>
  );
}

export default Aside; 