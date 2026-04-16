import { IconTrash } from "@tabler/icons-react";
import ManagerCard from "../ManagerCard";

function DeleteManagerData() {
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
        onClick: () => {
          console.log("Deleting data...");
        },
      }}
    />
  );
}

export default DeleteManagerData;