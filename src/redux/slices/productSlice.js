import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../services/apiInstance"; // Assuming this is your HTTP client for making API requests

// Initial state
const initialState = {
  products: [],
  loading: false,
  error: null,
};

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await httpClient.get("product/allProducts");
      return response.data.products; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to fetch products");
    }
  }
);

// Slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred while fetching products";
      });
  },
  reducers: {
    // Add any additional reducers if needed
    clearProducts: (state) => {
      state.products = [];
      state.loading = false;
      state.error = null;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product._id !== action.payload);
    }
  },
});

// Selectors (optional, you can use these to access state in your components)
export const Products = (state) => state.products.products;
export const Loading = (state) => state.products.loading;
export const Errors = (state) => state.products.error;

// Export actions
export const { clearProducts,deleteProduct } = productsSlice.actions;

// Export reducer
export default productsSlice.reducer;
