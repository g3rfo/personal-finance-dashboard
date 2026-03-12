import type { Category } from "@/types/category.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const userId = localStorage.getItem("token");
    const response = await axios.get(`${apiURL}/categories`, {
      params: {
        userId,
      },
    });

    const categories: Category[] = response.data.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ userId, ...category }: Category & { userId: string }) => category,
    );

    return categories;
  },
);

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (categoryData: Category) => {
    const userId = localStorage.getItem("token");
    const response = await axios.post(`${apiURL}/categories`, {
      ...categoryData,
      userId,
    });
    return response.data;
  },
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (categoryId: string) => {
    await axios.delete(`${apiURL}/categories/${categoryId}`);
    return categoryId;
  },
);
