import { createSlice } from '@reduxjs/toolkit';
import { fetchDeviceInfo } from './deviceThunk';

const initialState = {
  deviceName: [],
  isLoading: false,
};

const deviceSlice = createSlice({
  name: 'deviceName',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchDeviceInfo.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchDeviceInfo.fulfilled, (state, { payload }) => {
        state.deviceName = payload.data;
        state.isLoading = false;
      })
      .addCase(fetchDeviceInfo.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});

export const deviceReducer = deviceSlice.reducer;
