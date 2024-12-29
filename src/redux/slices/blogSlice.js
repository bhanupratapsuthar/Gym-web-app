import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../services/apiInstance"; // Assuming this is your HTTP client for making API requests

// Initial state
const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

// Async thunk to fetch blogs
export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, thunkAPI) => {
    try {
      const response = await httpClient.get("blog/allBlogs");
      console.log("al.....",response);
      return response.data.blogs; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to fetch blogs");
    }
  }
);

// Slice
const blogSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while fetching blogs";
      });
  },
  reducers: {
    // Add any additional reducers if needed
    clearBlogs: (state) => {
      state.blogs = [];
      state.loading = false;
      state.error = null;
    },
  },
});

// Selectors (optional, you can use these to access state in your components)
export const Blogs = (state) => state.blogs.blogs;
export const Loading = (state) => state.blogs.loading;
export const Errors = (state) => state.blogs.error;

// Export actions
export const { clearBlogs } = blogSlice.actions;

// Export reducer
export default blogSlice.reducer;
