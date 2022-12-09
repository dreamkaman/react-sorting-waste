import { configureStore } from '@reduxjs/toolkit';
import { loginServiceReducer } from './auth/authReducer';
import { ratingReducer } from './rating/ratingReducer';
import { servicesReducer } from './services/servicesReducer';
import { wastPointsReducer } from './wastePoints/wastePointsReducers';
import { ordersReducer } from './orders/orderReducers';

export const store = configureStore({
  reducer: {
    logginedService: loginServiceReducer,
    allServices: servicesReducer,
    wastePoints: wastPointsReducer,
    orders: ordersReducer,
    rating: ratingReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
