import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user:{
        data:null,
        token:null,
  },
  loading: false,
};

const login = createAsyncThunk(
    "auth/login",
    async (username, password , thunkApi) => {
      try {
        // const user = await AuthApi.login(username, password);
        // return thunkApi.fulfillWithValue(user.tokens);
      } catch (error) {
        // throw thunkApi.rejectWithValue(error);
      }
    }
  );

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder)=>{
    builder
     .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
     .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
     .addCase(login.rejected, (state, action) => {
        console.error("Error logging in:", action.payload);
      });
  },
  reducers: {
    clearAuth: (state) => {
      return initialState;
    },
  },
});

export  { login } 

export const user = (state) => state.authSlice.user;
export const token = (state) => state.authSlice.user.token;
export const loading = (state) => state.authSlice.loading;
export const { clearAuth } = authSlice.actions;

export default authSlice.reducer;