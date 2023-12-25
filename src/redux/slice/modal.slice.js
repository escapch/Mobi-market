// redux/slice/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalIsOpen: false,
  completeRegModal: false,
  completedProfile: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    // openModal: (state, actions) => {
    //   state.modalIsOpen = actions.payload;
    // },
    // closeModal: (state, actions) => {
    //   state.modalIsOpen = actions.payload;
    // },
    openModal: (state, action) => {
      const { modalName, value } = action.payload;
      state[modalName] = value;
    },
    closeModal: (state, action) => {
      const { modalName, value } = action.payload;
      state[modalName] = value;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
