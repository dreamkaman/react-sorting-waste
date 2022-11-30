import { createAction } from '@reduxjs/toolkit';

//pending
export const loginUserRequest = createAction('user/loginRequest');

//fulfilled
export const loginUserSuccess = createAction('user/loginSuccess');

//rejected
export const loginUserError = createAction('user/loginError');
