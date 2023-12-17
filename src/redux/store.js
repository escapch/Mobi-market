import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import base from './slice/baseSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    url: base,
  },
});
