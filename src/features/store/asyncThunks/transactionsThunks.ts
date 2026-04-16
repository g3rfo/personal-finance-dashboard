import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  PaginatedTransactionsResponse,
  Transaction,
  TransactionData,
} from "../../../types/transaction.type";
import { TRANSACTIONS_PER_PAGE } from "@/constants/transactions";
import { getMonthlyDateBounds } from "@/utils/dateFormatters";
import type { FilterQuery } from "../slices/transactionsSlice";
import { userIdVerification } from "@/utils/userData";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (pageNumber: number) => {
    userIdVerification(localStorage.getItem("token"));

    const { data, headers } = await axios.get<Transaction[]>(
      `${apiURL}/transactions`,
      {
        params: {
          userId: localStorage.getItem("token") || "",
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
    userIdVerification(localStorage.getItem("token"));
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

export const fetchFilteredTransactions = createAsyncThunk(
  "transactions/fetchFilteredTransactions",
  async ({
    monthFrom,
    monthTo,
    category,
    type,
    pageNumber,
  }: {
    monthFrom: string;
    monthTo: string;
    category: string;
    type: string;
    pageNumber: number;
  }) => {
    userIdVerification(localStorage.getItem("token"));

    const params: Record<string, string | number> = {
      userId: localStorage.getItem("token") || "",
      _page: pageNumber,
      _limit: TRANSACTIONS_PER_PAGE,
      _sort: "date",
      _order: "desc",
    };

    if (monthFrom && monthTo) {
      params.date_gte = monthFrom;
      params.date_lte = monthTo;
    }

    if (category !== "All Categories" && category) {
      params.category = category;
    }
    if (type !== "all" && type) {
      params.type = type;
    }

    const { data, headers } = await axios.get<Transaction[]>(
      `${apiURL}/transactions`,
      {
        params,
      },
    );

    const total = Number(headers["x-total-count"]);

    return {
      transactions: data,
      page: pageNumber,
      total,
      monthFrom,
      monthTo,
      category,
      type,
    } as PaginatedTransactionsResponse & FilterQuery;
  },
);

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (transactionData: TransactionData) => {
    userIdVerification(localStorage.getItem("token"));

    const { data } = await axios.post<Transaction>(
      `${apiURL}/transactions`,
      transactionData,
    );

    if (data.name !== transactionData.name) {
      throw new Error("Transaction name mismatch");
    }

    return data;
  },
);

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (transactionId: string) => {
    userIdVerification(localStorage.getItem("token"));

    await axios.delete(`${apiURL}/transactions/${transactionId}`);

    return transactionId;
  },
);

export const updateTransaction = createAsyncThunk(
  "transactions/updateTransaction",
  async (transactionData: Transaction) => {
    userIdVerification(localStorage.getItem("token"));

    const { data } = await axios.patch<Transaction>(
      `${apiURL}/transactions/${transactionData.id}`,
      transactionData,
    );

    if (data.id !== transactionData.id) {
      throw new Error("Transaction id mismatch");
    }

    return data;
  },
);

export const deleteAllTransactions = createAsyncThunk(
  "transactions/deleteAllTransactions",
  async (userId: string) => {
    const { data } = await axios.get(`${apiURL}/transactions`, {
      params: { userId },
    });

    for (const transaction of data) {
      await axios.delete(`${apiURL}/transactions/${transaction.id}`);
    }

    console.log("All transactions deleted successfully");
    return;
  },
);
