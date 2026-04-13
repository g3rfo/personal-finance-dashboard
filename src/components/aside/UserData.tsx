import { useAppSelector } from "@/features/store/hooks";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Outline from "../ui/Outline";

function UserData() {
  const name = useAppSelector((state) => state.user.name);
  const email = useAppSelector((state) => state.user.email);

  const initials = name.split(" ").map((word) => word[0]).join("").toUpperCase();

  return (
    <Outline className="p-6.25">
      <div className="w-full flex justify-start gap-3 items-center box-border">
        <Avatar size="lg">
          <AvatarFallback className="-bg-linear-270 from-[#4ADE80] to-[#16A34A] text-background font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </div>
    </Outline>
  );
}

export default UserData;
