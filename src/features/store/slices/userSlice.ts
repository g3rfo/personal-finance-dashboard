import type { User } from "@/types/user.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  name: "",
  email: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
    logoutUser: () => {
      localStorage.removeItem("token");
      return initialState;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;