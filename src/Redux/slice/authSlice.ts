import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: number | null;
  token: any;
}

interface authData {
  user: User;
}

const initialState: authData = {
  user: {
    email: "",
    password: null,
    token: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { email, password, token } = action.payload;
      const tokenSet = token;
      localStorage.setItem("token", tokenSet);
      return {
        user: {
          email: email,
          password: password,
          token: token,
        },
      };
    },

    
  },
});

export const { loginUser } = authSlice.actions;

export default authSlice.reducer;
