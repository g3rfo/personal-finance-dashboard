import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  PaginatedTransactionsResponse,
  Transaction,
  TransactionData,
} from "../../../types/transaction.type";
import { TRANSACTIONS_PER_PAGE } from "@/constants/transactions";
import { getMonthlyDateBounds } from "@/utils/dateFormatters";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (pageNumber: number) => {
    const userId = localStorage.getItem("token");
    const { data, headers } = await axios.get<Transaction[]>(
      `${apiURL}/transactions`,
      {
        params: {
          userId,
          _page: pageNumber,
          _limit: TRANSACTIONS_PER_PAGE,
          _sort: "date",
          _order: "desc",
        },
      },
    );

    const total = Number(headers["x-total-count"]);
    return {
      transactions: data,
      page: pageNumber,
      total,
    } as PaginatedTransactionsResponse;
  },
);

export const fetchMonthlyTransactions = createAsyncThunk(
  "transactions/fetchMonthlyTransactions",
  async () => {
    const userId = localStorage.getItem("token");
    const { startDate, nextMonthStartDate } = getMonthlyDateBounds();

    const { data } = await axios.get<Transaction[]>(`${apiURL}/transactions`, {
      params: {
        userId,
        date_gte: startDate,
        date_lte: nextMonthStartDate,
      },
    });

    return data as Transaction[];
  },
);

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (transactionData: TransactionData) => {
    const { data } = await axios.post<Transaction>(
      `${apiURL}/transactions`,
      transactionData,
    );

    return data as Transaction;
  },
);

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (transactionId: string) => {
    const { data } = await axios.delete<Transaction>(
      `${apiURL}/transactions/${transactionId}`,
    );
    return data.id as string;
  },
);
