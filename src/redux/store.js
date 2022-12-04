import { configureStore } from '@reduxjs/toolkit';
import { loginReducer, registerReducer } from './auth/authReducer';
// import loginReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    user: loginReducer,
    registered: registerReducer,
    services: [],
    // wastePoint: [
    //   {
    //     id: 0,
    //     type: 'string',
    //     description: 'string',
    //     longitude: 0,
    //     latitude: 0,
    //     ecoService: {
    //       id: 0,
    //       name: 'string',
    //       email: 'string',
    //       address: 'string',
    //       phoneNumber: 'string',
    //       workHours: 'string',
    //       city: 'string',
    //       country: 'string',
    //       free: true,
    //       delivery: true,
    //     },
    //     wasteAddress: {
    //       id: 0,
    //       country: 'string',
    //       city: 'string',
    //       street: 'string',
    //       number: 'string',
    //     },
    //   },
    // ],
  },
  devTools: process.env.NODE_ENV === 'development',
});
