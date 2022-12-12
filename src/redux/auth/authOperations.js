import * as serviceAPI from 'API/goeco/goecoAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { initialServiceState } from './authReducer';

export const loginServiceOperation = createAsyncThunk(
  'service/login',
  async ({ email, password }) => {
    const response = await serviceAPI.loginService(email, password);
    return response.data;
  },
);

export const logoutServiceOperation = createAsyncThunk('service/logout', () => {
  return initialServiceState;
});
