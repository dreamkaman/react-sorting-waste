import { createAsyncThunk } from '@reduxjs/toolkit';
import * as serviceAPI from 'API/goeco/goecoAPI';

export const postWastePointRatingOperation = createAsyncThunk(
  'wastePointRating/post',
  async (feedback) => {
    const response = await serviceAPI.postWastePointRating(feedback);
    return response.data;
  },
);

export const getWastePointRatingOperation = createAsyncThunk(
  'wastePointRating/get',
  async (wasteId) => {
    const response = await serviceAPI.getWastePointRating(wasteId);
    return response.data;
  },
);

export const getAllWastePointRatingsOperation = createAsyncThunk(
  'allWastePointRatings/get',
  async () => {
    const response = await serviceAPI.getAllWastePointRatings();
    return response.data;
  },
);
