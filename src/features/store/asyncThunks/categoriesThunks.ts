import type { Category, CategoryResponse } from "@/types/category.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const userId = localStorage.getItem("token");
    const { data } = await axios.get<CategoryResponse[]>(
      `${apiURL}/categories`,
      {
        params: {
          userId,
        },
      },
    );

    const categories: Category[] = data.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ userId, ...category }: { userId: string } & Category) => category,
    );

    return categories;
  },
);

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (categoryData: Category) => {
    const userId = localStorage.getItem("token");
    const { data } = await axios.post<CategoryResponse>(
      `${apiURL}/categories`,
      {
        ...categoryData,
        userId,
      },
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { userId: _, ...category } = data;
    return category as Category;
  },
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (categoryId: string) => {
    const { data } = await axios.delete<CategoryResponse>(
      `${apiURL}/categories/${categoryId}`,
    );
    return data.id as string;
  },
);
