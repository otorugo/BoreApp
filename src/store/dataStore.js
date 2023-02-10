import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

const dataStore = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default dataStore;
