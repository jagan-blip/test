import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import navbarReducer from '../components/navbar/navbarSlice';
import weatherReducer from '../components/main/mainSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navbarReducer,
    weather : weatherReducer,
    
  },
});
