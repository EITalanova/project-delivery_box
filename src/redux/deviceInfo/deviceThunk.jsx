import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL } from 'configs';

axios.defaults.baseURL = BASE_URL;


export const fetchDeviceInfo = createAsyncThunk(
  'device/deviceInfo',
  async (device_uid, thunkAPI) => {
    try {
      const res = await axios.get(`/api/2.0.0/public/device/${device_uid}/`);
      
      return { data: res.data.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
