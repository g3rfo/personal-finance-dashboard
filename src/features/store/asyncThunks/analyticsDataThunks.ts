import { getSixMonthDateBounds } from "@/utils/dateFormatters";
import { userIdVerification } from "@/utils/userData";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AnalyticsDataValue } from "../slices/analyticsDataSlice";
import type { Transaction } from "@/types/transaction.type";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchAnalyticsData = createAsyncThunk(
  "analyticsData/fetchAnalyticsData",
  async () => {
    const userId = localStorage.getItem("token");
    userIdVerification(userId);

    const { startDate, endDate } = getSixMonthDateBounds();
    const { data } = await axios.get<Transaction[]>(`${apiURL}/transactions`, {
      params: {
        userId: userId,
        date_gte: startDate,
        date_lte: endDate,
        _sort: "date",
        _order: "ASC",
      },
    });

    const result: AnalyticsDataValue = {
      income: [0, 0, 0, 0, 0, 0],
      expenses: [0, 0, 0, 0, 0, 0],
      balance: [0, 0, 0, 0, 0, 0],
    };

    const firstMonth = new Date().getMonth() - 5;

    data.forEach((transaction) => {
      const tMonth = new Date(transaction.date).getMonth();
      let diff = (tMonth - firstMonth + 12) % 12;
      let index = 0;

      while (diff > 0) {
        diff--;
        index++;
      }

      if (transaction.type === "income") {
        result.income[index] += transaction.amount;
        result.balance[index] += transaction.amount;
      } else {
        result.expenses[index] += transaction.amount;
        result.balance[index] -= transaction.amount;
      }
    });

    return result;
  },
);
