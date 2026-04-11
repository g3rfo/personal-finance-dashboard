import type {
  User,
  UserRegistrationData,
  UserServerResponse,
} from "@/types/user.type";
import { postDefaultCategories } from "@/utils/postDefaultCategories";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (token: string) => {
    const { data } = await axios.get<UserServerResponse>(`${apiURL}/users`, {
      params: {
        id: token,
      },
    });

    return { name: data.name, email: data.email } as User;
  },
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData: UserRegistrationData) => {
    const { data } = await axios.post<UserServerResponse>(`${apiURL}/users`, {
      ...userData,
    });

    if (!data || !data.id) {
      throw new Error("User registration failed");
    }

    await postDefaultCategories(data.id);
  },
);
