import { Avatar, AvatarFallback } from "../ui/avatar";
import Outline from "../ui/Outline";

function UserData() {
  return (
    <Outline className="p-6.25">
      <div className="w-full flex justify-start gap-3 items-center box-border">
        <Avatar size="lg">
          <AvatarFallback className="-bg-linear-270 from-[#4ADE80] to-[#16A34A] text-background font-bold">CN</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">Jonn Doe</h3>
          <p className="text-sm text-muted-foreground">jonn.doe@example.com</p>
        </div>
      </div>
    </Outline>
  );
}

export default UserData;