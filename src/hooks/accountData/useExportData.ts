import { exportTransactionsToCSV } from "@/utils/exportTransactionsToCSV";
import getUserTransactions from "@/utils/getUserTransactions";
import { useState } from "react";

function useExportData() {
  const [pending, setPending] = useState(false);

  const exportData = async () => {
    setPending(true);
    try {
      const tranactions = await getUserTransactions();

      if (tranactions) {
        const filename = "transactions.csv";

        exportTransactionsToCSV(tranactions, filename);
      }
    } catch (error) {
      console.error("Error exporting data:", error);
    } finally {
      setPending(false);
    }
  };

  return { pending, exportData };
}

export default useExportData;
