import axios from "axios";
import type { ParsedTransaction } from "./parseTransactionCSV";
import { userIdVerification } from "./userData";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const postUserTransactions = async (
  transactions: ParsedTransaction[],
) => {
  try {
    const userId = localStorage.getItem("token");
    userIdVerification(userId);

    for (const transaction of transactions) {
      await axios.post(`${apiURL}/transactions`, {
        userId,
        ...transaction,
      });
    }
  } catch (error) {
    alert(`Error uploading transactions: ${error}`);
  }
};
