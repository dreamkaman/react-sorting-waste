import * as serviceAPI from 'API/services/servicesAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginServiceOperation = createAsyncThunk(
  'service/login',
  async ({ login, password }) => {
    const response = await serviceAPI.loginService({ login, password });
    return response.data;
  },
);
