import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (token: string) => {
    const response = await axios.get(`${apiURL}/users`, {
      params: {
        id: token,
      },
    });

    return { name: response.data[0].name, email: response.data[0].email };
  },
);