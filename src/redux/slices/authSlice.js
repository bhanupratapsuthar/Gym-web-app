import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../services/apiInstance";
import Cookies from "js-cookie";

const initialState = {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
};

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await httpClient.post("auth/login", { email, password });
            
            // Assuming the response includes a token
            const token = response.data.token;
            console.log(response)
            if (token) {
                Cookies.set("token", token, { expires: 1, secure: true, path: "/" });
            }

            return response.data; // Assuming the API returns user data on success
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "An error occurred";
            });
    },
    reducers: {
        clearAuth: (state) => {
            return initialState;
        },
    },
});

export const {user} = (state) => state.authSlice;
export const {token} = (state) => state.authSlice.user;
export const {loading} = (state) => state.authSlice;
export const { clearAuth } = authSlice.actions;

export default authSlice.reducer;