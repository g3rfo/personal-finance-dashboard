import { IconUpload } from "@tabler/icons-react";
import ManagerCard from "../ManagerCard";

function ImportDataManager() {
  return (
    <ManagerCard
      cardTitle="Import Data"
      description="Import transactions from CSV file"
      buttonProps={{
        icon: <IconUpload />,
        title: "Import",
        variant: "outline",
        className: "w-24",
        onClick: () => {
          console.log("Importing data...");
        },
      }}
    />
  );
}

export default ImportDataManager;
