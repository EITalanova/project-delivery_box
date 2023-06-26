import { createSlice } from "@reduxjs/toolkit";
import { fetchCellAvailability } from "./cellAvailabilityThunk";

const initialState = {
    cellAvailability: [],
    isLoading: false,
}

const cellAvailabilitySlice = createSlice({
    name: 'cellAvailability',
    initialState,
    reducers: {},
    extraReducers: builder =>
    builder
      .addCase(fetchCellAvailability.pending, (state, { payload }) => {
        state.isLoading = true;
      })
        .addCase(fetchCellAvailability.fulfilled, (state, { payload }) => {
          console.log(payload.data)
        state.cellAvailability = payload.data;
          state.isLoading = false;

      })
      .addCase(fetchCellAvailability.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});

export const cellAvailabilityReducer = cellAvailabilitySlice.reducer;