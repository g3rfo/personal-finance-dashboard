import { postUserTransactions } from "@/utils/postUserTransactions";
import { readTransactionsCSVFile } from "@/utils/readTransactionsCSVFile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useImportData = () => {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);

  const importData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setPending(true);
      const file = e.target.files?.[0];
      if (!file) return;

      const data = await readTransactionsCSVFile(file);

      if (!data.length) {
        throw new Error("The file is empty or contains invalid data.");
      }

      await postUserTransactions(data);

      alert("Data imported successfully!");
      navigate(0);
    } catch (error) {
      alert(`Error importing data: ${error}`);
    } finally {
      setPending(false);
    }
  };

  return { importData, pending };
};

export default useImportData;
