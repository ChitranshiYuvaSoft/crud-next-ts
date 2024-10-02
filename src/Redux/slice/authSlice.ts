import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : {}
    },
    reducers : {}
})

export default authSlice.reducer;