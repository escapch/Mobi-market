import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  email: '',
  tel: '',
  date: '',
  firstName: '',
  lastName: '',
  photo: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
