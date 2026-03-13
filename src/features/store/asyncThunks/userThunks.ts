import type { UserRegistrationData } from "@/types/user.type";
import { postDefaultCategories } from "@/utils/postDefaultCategories";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (token: string) => {
    const { data } = await axios.get(`${apiURL}/users`, {
      params: {
        id: token,
      },
    });

    return { name: data.name, email: data.email };
  },
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData: UserRegistrationData) => {
    const { data } = await axios.post(`${apiURL}/users`, {
      ...userData,
    });

    await postDefaultCategories(data.id);

    return {
      id: data.id,
      name: data.name,
      email: data.email,
    };
  },
);
