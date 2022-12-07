import { createAsyncThunk } from '@reduxjs/toolkit';
import * as serviceAPI from 'API/services/servicesAPI';

export const getServicesOperation = createAsyncThunk('services/get', async () => {
  const response = await serviceAPI.getServices();
  return response.data;
});

export const signupServiceOperation = createAsyncThunk(
  'service/signup',
  async (ecoServiceObject) => {
    const response = await serviceAPI.signupService(ecoServiceObject);
    return response.data;
  },
);

export const deleteServiceOperation = createAsyncThunk('service/delete', async (ecoServiceId) => {
  const response = await serviceAPI.deleteService(ecoServiceId);
  return response.data;
});