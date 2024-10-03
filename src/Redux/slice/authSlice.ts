import { createSlice } from "@reduxjs/toolkit";

interface authData {
  user: { name: string; email: string; password: number };
  edit: {user : {} , isEdit : boolean};
}

const initialState: authData = {
    user : {
        name : "Avni",
        email : "avni12@gmail.com",
        password : 123456
    },
    edit : {
      user : {},
      isEdit : false,
    }
    
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
