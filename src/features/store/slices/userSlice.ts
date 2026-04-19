import type { User, UserAuthData } from "@/types/user.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  fetchUserData,
  registerUser,
  updateUserData,
} from "../asyncThunks/userThunks";
import { resetData } from "@/utils/userData";

const saveUserData = (state: User, user: User) => {
  localStorage.setItem("userData", JSON.stringify(user));

  state.fullName = user.fullName;
  state.email = user.email;
};

const initialState: User = {
  fullName: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserAuthData>) => {
      saveUserData(state, action.payload);

      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
      }
    },
    logoutUser: () => {
      resetData();
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
      .addCase(registerUser.fulfilled, () => {
        alert(
          "Registration successful! Please log in with your new credentials.",
        );
      })
      .addCase(
        updateUserData.fulfilled,
        (state, action: PayloadAction<User>) => {
          saveUserData(state, action.payload);
          alert("User data updated successfully!");
        },
      );
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
