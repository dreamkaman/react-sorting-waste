import { configureStore } from '@reduxjs/toolkit';
import { loginServiceReducer } from './auth/authReducer';
import { servicesReducer } from './services/servicesReducer';
import { wastPointsReducer } from './wastePoints/wastePointsReducers';

export const store = configureStore({
  reducer: {
    logginedService: loginServiceReducer,
    allServices: servicesReducer,
    wastePoints: wastPointsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
