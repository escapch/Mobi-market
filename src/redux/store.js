import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import navigateSlice from './slice/baseSlice';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});
