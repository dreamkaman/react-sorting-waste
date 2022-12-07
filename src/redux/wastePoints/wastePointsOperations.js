import { createAsyncThunk } from '@reduxjs/toolkit';
import * as serviceAPI from 'API/services/servicesAPI';

export const getFilteredWastePointsOperation = createAsyncThunk(
  'wastePoints/getFiltered',
  async (filter = {}) => {
    const response = await serviceAPI.getFilteredWastePoints(filter);
    return response.data;
  },
);

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

export const getWastePointsByEcoServiceIdOperation = createAsyncThunk(
  'wastePointsByEcoServiceId/get',
  async (ecoServiceId) => {
    const response = await serviceAPI.getWastPointsByEcoServiceId(ecoServiceId);
    return response.data;
  },
);
