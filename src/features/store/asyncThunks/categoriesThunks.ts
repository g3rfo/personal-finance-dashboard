import type { Category, CategoryFormData } from "@/types/category.type";
import { userIdVerification } from "@/utils/userData";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    userIdVerification(localStorage.getItem("token"));

    const { data } = await axios.get<Category[]>(`${apiURL}/categories`, {
      params: {
        userId: localStorage.getItem("token") || "",
      },
    });

    return data;
  },
);

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (categoryData: CategoryFormData) => {
    userIdVerification(localStorage.getItem("token"));
    const { data } = await axios.post<Category>(`${apiURL}/categories`, {
      userId: localStorage.getItem("token") || "",
      ...categoryData,
    });

    return data;
  },
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (categoryId: string) => {
    userIdVerification(localStorage.getItem("token"));
    await axios.delete<Category>(`${apiURL}/categories/${categoryId}`);

    return categoryId;
  },
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async (categoryData: CategoryFormData & { id: string }) => {
    userIdVerification(localStorage.getItem("token"));

    const { id, ...payload } = categoryData;
    const { data } = await axios.patch<Category>(`${apiURL}/categories/${id}`, {
      userId: localStorage.getItem("token") || "",
      ...payload,
    });

    return data;
  },
);

export const deleteAllCategories = createAsyncThunk(
  "categories/deleteAllCategories",
  async (userId: string) => {
    const { data } = await axios.get(`${apiURL}/categories`, {
      params: { userId },
    });

    const deletePromises = data.map((category: Category) =>
      axios.delete(`${apiURL}/categories/${category.id}`),
    );
    console.log("All categories deleted successfully");
    await Promise.all(deletePromises);
  },
);
