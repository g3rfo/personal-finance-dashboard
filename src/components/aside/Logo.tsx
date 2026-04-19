import { Link } from "react-router-dom";
import Outline from "../ui/Outline";
import { Avatar, AvatarImage } from "../ui/avatar";

function Logo() {
  return (
    <Outline className="p-6.25">
      <Link to="/dashboard" className="w-full flex justify-start gap-3 items-center box-border cursor-pointer">
        <Avatar size="lg">
          <AvatarImage src="/images/logo.png" alt="Logo" />
        </Avatar>
        <h1 className="text-xl font-bold">MoneyFlow</h1>
      </Link>
    </Outline>
  );
}

export default Logo;
