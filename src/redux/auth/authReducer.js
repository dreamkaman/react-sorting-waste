import { createReducer } from '@reduxjs/toolkit';
import * as authActions from './authActions';

export const loginReducer = createReducer(
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
    [authActions.loginUserRequest]: (_state, action) => {
      console.log(action);
    },
    [authActions.loginUserSuccess]: (_state, action) => {
      console.log(action);
    },
    [authActions.loginUserError]: (_state, action) => {
      console.log(action);
    },
  },
);

export const registerReducer = createReducer(
  {
    success: '',
  },
  {
    [authActions.registerUserRequest]: (_state, action) => {
      console.log(action);
    },
    [authActions.registerUserSuccess]: (_state, action) => {
      console.log(action);
    },
    [authActions.registerUserError]: (_state, action) => {
      console.log(action);
    },
  },
);
