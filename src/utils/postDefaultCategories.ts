import { DEFAULT_CATEGORIES } from "@/constants/defaultCategories";
import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const postDefaultCategories = async (userId: string) => {
  const categories = DEFAULT_CATEGORIES.map((category) => ({
    userId: userId,
    ...category,
  }));

  try {
    for (const category of categories) {
      await axios.post(`${apiURL}/categories`, category);
    }
  } catch (error) {
    console.error("Error posting default categories:", error);
  }
};
