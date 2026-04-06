import type { Category } from "@/types/category.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const userId = localStorage.getItem("token");
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
  async (categoryData: Category) => {
    const { data } = await axios.post<Category>(`${apiURL}/categories`, {
      categoryData,
    });

    return data;
  },
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (categoryId: string) => {
    const { data } = await axios.delete<Category>(
      `${apiURL}/categories/${categoryId}`,
    );
    return data.id as string;
  },
);
