import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Transaction } from "../../../types/transaction.type";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (userId: number) => {
    const response = await axios.get(`${apiURL}/transactions?userId=${userId}`);
    return response.data;
  },
);

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (transactionData: Transaction) => {
    const response = await axios.post(`${apiURL}/transactions`, transactionData);
    return response.data;
  },
);

