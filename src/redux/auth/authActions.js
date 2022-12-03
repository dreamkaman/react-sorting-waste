import { createAction } from '@reduxjs/toolkit';

//pending
export const loginUserRequest = createAction('user/loginRequest');

//fulfilled
export const loginUserSuccess = createAction('user/loginSuccess');

//rejected
export const loginUserError = createAction('user/loginError');

//pending
export const registerUserRequest = createAction('user/registerRequest');

//fulfilled
export const registerUserSuccess = createAction('user/registerSuccess');

//rejected
export const registerUserError = createAction('user/registerError');
