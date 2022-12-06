import { configureStore } from '@reduxjs/toolkit';
import { loginServiceReducer } from './auth/authReducer';
import { servicesReducer } from './services/servicesReducer';

export const store = configureStore({
  reducer: {
    logginedService: loginServiceReducer,
    allServices: servicesReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
