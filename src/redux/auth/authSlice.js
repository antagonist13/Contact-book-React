import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./authOps"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isLoading: false,
        isRefreshing: false,
        isRejected: false,
    },
    extraReducers: builder => builder
        .addCase(register.pending, state => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.paylaod.user
            state.token = action.payload.token
            state.isLoading = false
            state.isLoggedIn = true
        })
        .addCase(register.rejected, (state) => {
            state.isLoading = false
            state.isRejected = true
        })
        .addCase(logIn.pending, state => {
            state.isLoading = true
        })
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logIn.rejected, (state) => {
            state.isLoading = false
            state.isRejected = true
        })
        .addCase(logOut.pending, state => {
            state.isLoading = true
        })
        .addCase(logOut.fulfilled, state => {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(logOut.rejected, (state) => {
            state.isLoading = false
            state.isRejected = true
        })
        .addCase(refreshUser.pending, state => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false
            state.isRejected = true
        })
})
export default authSlice.reducer;