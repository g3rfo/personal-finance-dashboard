import Outline from "../ui/Outline";
import { Avatar, AvatarImage } from "../ui/avatar";

function Logo() {
  return (
    <Outline className="p-6.25">
      <div className="w-full flex justify-start gap-3 items-center box-border">
        <Avatar size="lg">
          <AvatarImage src="/images/logo.png" alt="Logo" />
        </Avatar>
        <h1 className="text-xl font-bold">MoneyFlow</h1>
      </div>
    </Outline>
  );
}

export default Logo;
