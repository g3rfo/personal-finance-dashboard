import { IconDownload } from "@tabler/icons-react";
import ManagerCard from "../ManagerCard";

function ExportDataManager() {
  return (
    <ManagerCard
      cardTitle="Export Data"
      description="Download all your transactions as CSV"
      buttonProps={{
        title: "Export",
        icon: <IconDownload />,
        variant: "outline",
        className: "w-24",
        onClick: () => {
          console.log("Exporting data...");
        },
      }}
    />
  );
}

export default ExportDataManager;
