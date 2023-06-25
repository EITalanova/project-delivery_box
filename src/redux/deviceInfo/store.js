import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { deviceReducer } from "./deviceSlice";
import { cellAvailabilityReducer } from "redux/cellAvailability/cellAvailabilitySlice";

const devicePersistConfig = {
    key: 'deviceName',
    storage
};

const cellAvailabilityPersistConfig = {
    key: 'cellAvailability',
    storage
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
    reducer: {
        deviceName: persistReducer(devicePersistConfig, deviceReducer),
        cellAvailability: persistReducer(cellAvailabilityPersistConfig, cellAvailabilityReducer)
    },
    middleware,
});

export const persistor = persistStore(store);