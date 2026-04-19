import { IconDownload } from "@tabler/icons-react";
import ManagerCard from "../ManagerCard";
import useExportData from "@/hooks/accountData/useExportData";

function ExportDataManager() {
  const { pending, exportData } = useExportData();

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
          exportData();
        },
        disabled: pending,
      }}
    />
  );
}

export default ExportDataManager;
