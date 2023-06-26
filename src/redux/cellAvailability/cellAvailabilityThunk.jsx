import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCellAvailability = createAsyncThunk(
  'cell/cellAvailability',
  async (device_uid, thunkAPI) => {
    try {
      const res = await axios.get(
        `/api/2.0.0/public/orders/device/${device_uid}/cells/statuses/?type=5`
      );
      console.log({ data: res.data.data });
      return { data: res.data.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
