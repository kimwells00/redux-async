import { createClient } from "@supabase/supabase-js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
const supabase = createClient(
  "https://mxakcphctxajogkuteth.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDE0NTg3OCwiZXhwIjoxOTM1NzIxODc4fQ.0qra9FQYuKCkgMteZ0ZAe2wrMx2v1IFGwsU60Oi4KwY"
);

export const fetchProducts = createAsyncThunk("data/getProducts", async () => {
  const { data } = await supabase.from("ProductsDatabase").select();
  console.log(data);
  return data;
});
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },

    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.value = payload;
    },
    [fetchProducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export default productsSlice.reducer;
