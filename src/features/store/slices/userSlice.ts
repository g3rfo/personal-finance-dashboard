import type { User } from "@/types/user.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchUserData, registerUser } from "../asyncThunks/userThunks";

const saveUserData = (state: User, user: User) => {
  localStorage.setItem("userData", JSON.stringify(user));

  state.name = user.name;
  state.email = user.email;
};

const initialState: User = {
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User & { token?: string }>) => {
      saveUserData(state, action.payload);

      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
      }
    },
    logoutUser: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchUserData.fulfilled,
        (state, action: PayloadAction<User>) => {
          saveUserData(state, action.payload);
        },
      )
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<User & { id: string }>) => {
          saveUserData(state, { name: action.payload.name, email: action.payload.email });
          localStorage.setItem("token", action.payload.id);
        },
      );
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

