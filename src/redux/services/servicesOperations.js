import { createAsyncThunk } from '@reduxjs/toolkit';
import * as serviceAPI from 'API/goeco/goecoAPI';

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

export const changeServiceInfoOperation = createAsyncThunk(
  'service/changeInfo',
  async (ecoServiceObject) => {
    const response = await serviceAPI.changeServiceInfo(ecoServiceObject);
    return response.data;
  },
);

export const changePasswordServiceOperation = createAsyncThunk(
  'service/changePassword',
  async (params) => {
    const response = await serviceAPI.changePasswordService(params);

    return response.data;
  },
);

export const getServiceByIdOperation = createAsyncThunk('service/getById', async (ecoServiceId) => {
  const response = await serviceAPI.getServiceById(ecoServiceId);
  return response.data;
});

export const deleteServiceOperation = createAsyncThunk('service/delete', async (ecoServiceId) => {
  const response = await serviceAPI.deleteService(ecoServiceId);
  return response.data;
});
