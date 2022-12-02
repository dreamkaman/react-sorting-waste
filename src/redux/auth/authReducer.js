import { createReducer } from '@reduxjs/toolkit';
import * as authActions from './authActions';

export const authReducer = createReducer(
  {
    id: null,
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    workHours: '',
    city: '',
    country: '',
    free: '',
    delivery: '',
  },
  {
    [authActions.loginUserSuccess]: (state, action) => {
      console.log(action);
    },
  },
);
