import { useAppSelector } from "@/features/store/hooks";
import Outline from "../ui/custom/Outline";
import AvatarComponent from "../ui/custom/AvatarComponent";
import { Link } from "react-router-dom";

function UserData() {
  const { fullName, email } = useAppSelector((state) => state.user);

  return (
    <Outline className="p-6.25">
      <Link
        to="/settings"
        className="w-full flex justify-start gap-3 items-center box-border cursor-pointer"
      >
        <AvatarComponent />
        <div>
          <h3 className="font-medium">{fullName}</h3>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </Link>
    </Outline>
  );
}

export default UserData;
