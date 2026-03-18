import type {
  User,
  UserAuthData,
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

    await postDefaultCategories(data.id);

    return {
      id: data.id,
      name: data.name,
      email: data.email,
      token: data.id,
    } as UserAuthData;
  },
);
