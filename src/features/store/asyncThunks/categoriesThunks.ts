import type { Category, CategoryFormData } from "@/types/category.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;
const userId = localStorage.getItem("token");
const userIdVerification = () => {
  if (!userId) {
    throw new Error("User ID not found in localStorage");
  }
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    userIdVerification();

    const { data } = await axios.get<Category[]>(`${apiURL}/categories`, {
      params: {
        userId,
      },
    });

    return data;
  },
);

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (categoryData: CategoryFormData) => {
    userIdVerification();
    const { data } = await axios.post<Category>(`${apiURL}/categories`, {
      userId,
      ...categoryData,
    });

    return data;
  },
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (categoryId: string) => {
    await axios.delete<Category>(`${apiURL}/categories/${categoryId}`);

    return categoryId;
  },
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async (categoryData: CategoryFormData & { id: string }) => {
    userIdVerification();

    const { id, ...payload } = categoryData;
    const { data } = await axios.patch<Category>(`${apiURL}/categories/${id}`, {
      userId,
      ...payload,
    });

    return data;
  },
);
