import {configureStore} from '@reduxjs/toolkit';
import counterReducer, {increment} from './counterSlice';

const dataStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

dataStore.dispatch(increment());

export default dataStore;
