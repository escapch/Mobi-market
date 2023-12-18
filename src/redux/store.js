import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import navigateSlice from './slice/baseSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    navigate: navigateSlice,
  },
});
