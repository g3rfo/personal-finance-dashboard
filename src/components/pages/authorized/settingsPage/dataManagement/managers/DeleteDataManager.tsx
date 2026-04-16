import { IconTrash } from "@tabler/icons-react";
import ManagerCard from "../ManagerCard";
import useDeleteData from "@/hooks/accountData/useDeleteData";

function DeleteManagerData() {
  const { handleDeleteData, pending } = useDeleteData();

  return (
    <ManagerCard
      cardTitle="Delete Data"
      description="Permanently remove all transactions and categories"
      className="border-destructive/40 bg-destructive/10 text-destructive"
      buttonProps={{
        icon: <IconTrash />,
        title: "Delete",
        variant: "destructive",
        className: "w-24 hover:bg-destructive/70",
        onClick: () => handleDeleteData(),
        disabled: pending,
      }}
    />
  );
}

export default DeleteManagerData;
