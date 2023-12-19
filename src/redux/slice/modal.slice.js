// redux/slice/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalIsOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalIsOpen = true;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModalIsOpen = (state) => state.modal.modalIsOpen;

export default modalSlice.reducer;
