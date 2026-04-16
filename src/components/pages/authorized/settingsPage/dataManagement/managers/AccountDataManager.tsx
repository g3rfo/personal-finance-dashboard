import IconFirstButton from "@/components/ui/IconFirstButton";
import { IconLogout2, IconTrash } from "@tabler/icons-react";

function AccountDataManager() {
  return (
    <div className="mt-3 flex flex-row gap-4">
      <IconFirstButton
        title="Log Out"
        icon={<IconLogout2 />}
        variant="outline"
        className="flex-1"
        onClick={() => {
          console.log("Logging out...");
        }}
      />
      <IconFirstButton
        title="Delete Account"
        icon={<IconTrash />}
        variant="destructive"
        className="flex-1 hover:bg-destructive/70"
        onClick={() => {
          console.log("Deleting account...");
        }}
      />
    </div>
  );
}

export default AccountDataManager;
