import IconFirstButton from "@/components/ui/IconFirstButton";
import { useAppDispatch } from "@/features/store/hooks";
import { logoutUser } from "@/features/store/slices/userSlice";
import useDeleteUser from "@/hooks/accountData/useDeleteUser";
import { IconLogout2, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router";

function AccountDataManager() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/auth");
  };

  const { handleDeleteAccount, pending } = useDeleteUser();

  return (
    <div className="mt-3 flex flex-row gap-4">
      <IconFirstButton
        title="Log Out"
        icon={<IconLogout2 />}
        variant="outline"
        className="flex-1"
        onClick={handleLogout}
      />
      <IconFirstButton
        title="Delete Account"
        icon={<IconTrash />}
        variant="destructive"
        className="flex-1 hover:bg-destructive/70"
        onClick={handleDeleteAccount}
        disabled={pending}
      />
    </div>
  );
}

export default AccountDataManager;
