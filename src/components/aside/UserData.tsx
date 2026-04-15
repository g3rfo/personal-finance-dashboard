import { useAppSelector } from "@/features/store/hooks";
import Outline from "../ui/Outline";
import AvatarComponent from "../ui/AvatarComponent";

function UserData() {
  const fullName = useAppSelector((state) => state.user.fullName);
  const email = useAppSelector((state) => state.user.email);

  return (
    <Outline className="p-6.25">
      <div className="w-full flex justify-start gap-3 items-center box-border">
        <AvatarComponent />
        <div>
          <h3 className="font-medium">{fullName}</h3>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </div>
    </Outline>
  );
}

export default UserData;
