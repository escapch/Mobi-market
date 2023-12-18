// В файле baseSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navigate: false,
};

export const navigateSlice = createSlice({
  name: 'navigate',
  initialState,
  reducers: {
    setNavigate(state, action) {
      state.navigate = action.payload;
    },
  },
});

export const { setNavigate } = navigateSlice.actions;

export const navigate = (state) => state.navigateSlice?.navigate;
export const selectNavigate = (state) => state.navigate;

export default navigateSlice.reducer;
