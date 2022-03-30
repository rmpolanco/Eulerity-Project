import { configureStore } from '@reduxjs/toolkit';
import urlReducer from '../Components/urlSlice';

export const store = configureStore({
  reducer: {
    counter: urlReducer,
  },
});
