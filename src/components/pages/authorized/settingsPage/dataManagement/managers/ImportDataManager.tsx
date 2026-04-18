import { IconUpload } from "@tabler/icons-react";
import ManagerCard from "../ManagerCard";
import useImportData from "@/hooks/accountData/useImportData";

function ImportDataManager() {
  const { importData, pending } = useImportData();

  return (
    <ManagerCard
      cardTitle="Import Data"
      description="Import transactions from CSV file"
      buttonProps={{
        icon: <IconUpload />,
        title: "Import",
        variant: "outline",
        className: "w-24 relative",
        disabled: pending,
        children: (
          <input
            type="file"
            accept=".csv"
            disabled={pending}
            onChange={importData}
            className="absolute cursor-pointer w-full h-full top-0 left-0 [&::-webkit-file-upload-button]:hidden opacity-0"
          />
        ),
      }}
    />
  );
}

export default ImportDataManager;
