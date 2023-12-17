import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseUrl: 'https://neobook.online/mobi-market/',
};

export const base = createSlice({
  name: 'baseUrl',
  initialState,
  reducers: {},
});

export const baseUrl = (state) => state.base?.baseUrl;
export default base.reducer;
