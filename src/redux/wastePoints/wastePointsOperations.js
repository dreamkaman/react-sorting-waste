import { createAsyncThunk } from '@reduxjs/toolkit';
import * as serviceAPI from 'API/services/servicesAPI';

export const getWastePointsOperation = createAsyncThunk('wastePoints/get', async () => {
  const response = await serviceAPI.getAllWastePoints();
  return response.data;
});

export const postWastePointOperation = createAsyncThunk(
  'wastePoint/post',
  async (wastePointObject) => {
    const response = await serviceAPI.postWastePoint(wastePointObject);
    return response.data;
  },
);

export const getWastePointByIdOperation = createAsyncThunk(
  'wastePoint/getById',
  async (wastePointId) => {
    const response = await serviceAPI.getWastePointById(wastePointId);
    return response.data;
  },
);

export const getWastePointsByEcoServiceId = createAsyncThunk(
  'wastePointsByEcoServiceId/get',
  async (ecoServiceId) => {
    const response = await serviceAPI.getWastPointsByEcoServiceId(ecoServiceId);
    return response.data;
  },
);
