import type { UserRegistrationData } from "@/types/user.type";
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

    return { name: response.data.name, email: response.data.email };
  },
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData: UserRegistrationData) => {
    const response = await axios.post(`${apiURL}/users`, {
      ...userData, 
    });
    return { id: response.data.id, name: response.data.name, email: response.data.email};
  },
);