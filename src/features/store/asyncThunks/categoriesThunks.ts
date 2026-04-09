import type { Category } from "@/types/category.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const userId = localStorage.getItem("token");
    if (!userId) {
      throw new Error("User ID not found in localStorage");
    }

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
  async (categoryData: Omit<Category, "id">) => {
    await axios.post<Category>(`${apiURL}/categories`, {
      categoryData,
    });
  },
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (categoryId: string) => {
    await axios.delete<Category>(`${apiURL}/categories/${categoryId}`);
  },
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async (categoryData: Category) => {
    await axios.patch<Category>(`${apiURL}/categories/${categoryData.id}`, {
      categoryData,
    });
  },
);
