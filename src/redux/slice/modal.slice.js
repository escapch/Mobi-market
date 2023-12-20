// redux/slice/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalIsOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, actions) => {
      state.modalIsOpen = actions.payload;
    },
    closeModal: (state, actions) => {
      state.modalIsOpen = actions.payload;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
