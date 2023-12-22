// rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './slice/userSlice';
import navigateReducer from './slice/baseSlice';
import modalReducer from './slice/modal.slice';
import productSlice from './slice/productSlice';

const rootReducer = combineReducers({
  user: userReducer,
  product: productSlice,
  navigate: navigateReducer,
  modalReducer,
});

export default rootReducer;
