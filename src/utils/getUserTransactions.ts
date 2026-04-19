import axios from "axios";
import { userIdVerification } from "./userData";
import type { Transaction } from "@/types/transaction.type";

const apiURL = import.meta.env.VITE_SERVER_URL;

const getUserTransactions = async () => {
  try {
    const userId = localStorage.getItem("token");
    userIdVerification(userId);

    const { data } = await axios.get<Transaction[]>(`${apiURL}/transactions`, {
      params: {
        userId,
      },
    });

    return data;
  } catch (error) {
    console.error("Error fetching user transactions:", error);
  }
};

export default getUserTransactions;
