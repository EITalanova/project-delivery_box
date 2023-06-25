import { createSlice } from "@reduxjs/toolkit";
import { fetchCellAvailability } from "./cellAvailabilityThunk";

const initialState = {
    cellAvailability: {},
    isLoading: false,
}

const cellAvailabilitySlice = createSlice({
    name: 'cell',
    initialState,
    reducers: {},
    extraReducers: builder =>
    builder
      .addCase(fetchCellAvailability.pending, (state, { payload }) => {
        state.isLoading = true;
      })
        .addCase(fetchCellAvailability.fulfilled, (state, { payload }) => {
          
        state.cellAvailability = payload.data;
          state.isLoading = false;

      })
      .addCase(fetchCellAvailability.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});

export const cellAvailabilityReducer = cellAvailabilitySlice.reducer;