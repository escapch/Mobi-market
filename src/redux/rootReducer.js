// rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './slice/userSlice';
import navigateReducer from './slice/baseSlice';
import modalReducer from './slice/modal.slice';
const rootReducer = combineReducers({
  user: userReducer,
  navigate: navigateReducer,
  modalReducer,
});

export default rootReducer;
