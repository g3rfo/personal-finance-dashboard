import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  Transaction,
  TransactionResponse,
} from "../../../types/transaction.type";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const userId = localStorage.getItem("token");
    const { data } = await axios.get<TransactionResponse[]>(
      `${apiURL}/transactions`,
      {
        params: {
          userId,
        },
      },
    );

    const transactions: Transaction[] = data.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ userId, ...transaction }: { userId: string } & Transaction) =>
        transaction,
    );

    return transactions;
  },
);

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (transactionData: Transaction) => {
    const userId = localStorage.getItem("token");
    const response = await axios.post<TransactionResponse>(
      `${apiURL}/transactions`,
      { ...transactionData, userId },
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { userId: _, ...transaction } = response.data;
    return transaction as Transaction;
  },
);

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (transactionId: string) => {
    const { data } = await axios.delete<TransactionResponse>(
      `${apiURL}/transactions/${transactionId}`,
    );
    return data.id as string;
  },
);
