import type { Category } from "@/types/category.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  addCategory,
  deleteCategory,
  fetchCategories,
  updateCategory,
} from "../asyncThunks/categoriesThunks";

interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string | null;
  selectedId: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
  selectedId: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    setSelectedCategoryId(state, action: PayloadAction<string | null>) {
      state.selectedId = action.payload;
    },
    unsetSelectedCategoryId(state) {
      state.selectedId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.loading = false;
          state.categories = action.payload;
        },
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch categories";
      })

      // Add category
      .addCase(addCategory.pending, (state) => {
        state.error = null;
      })
      .addCase(
        addCategory.fulfilled,
        (state, action: PayloadAction<Category>) => {
          state.categories.push(action.payload);
        },
      )
      .addCase(addCategory.rejected, (state, action) => {
        state.error = action.error.message || "Failed to add category";
      })

      // Delete category
      .addCase(deleteCategory.pending, (state) => {
        state.error = null;
      })
      .addCase(
        deleteCategory.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.categories = state.categories.filter(
            (category) => category.id !== action.payload,
          );
        },
      )
      .addCase(deleteCategory.rejected, (state, action) => {
        state.error = action.error.message || "Failed to delete category";
      })

      // Update category
      .addCase(updateCategory.pending, (state) => {
        state.error = null;
      })
      .addCase(
        updateCategory.fulfilled,
        (state, action: PayloadAction<Category>) => {
          state.categories = state.categories.map((category) =>
            category.id === action.payload.id ? action.payload : category,
          );
        },
      )
      .addCase(updateCategory.rejected, (state, action) => {
        state.error = action.error.message || "Failed to update category";
      });
  },
});

export const { setSelectedCategoryId, unsetSelectedCategoryId } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
