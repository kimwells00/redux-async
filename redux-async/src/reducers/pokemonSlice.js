import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  loading: false,
};

export const fetchPokemon = createAsyncThunk("data/getPokemon", async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await data.json();
  return json.results;
});
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPokemon.pending]: (state) => {
      state.loading = true;
    },
    [fetchPokemon.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value = payload;
    },
    [fetchPokemon.rejected]: (state) => {
      state.loading = false;
    },
  },
});
//export const { dataLoaded } = pokemonSlice.actions;
export default pokemonSlice.reducer;
