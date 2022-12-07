import { createAsyncThunk } from '@reduxjs/toolkit';
import * as serviceAPI from 'API/services/servicesAPI';

export const postWastePointRatingOperation = createAsyncThunk(
  'wastePointRating/post',
  async (feedback) => {
    const response = await serviceAPI.postWastePointRating(feedback);
    return response.data;
  },
);
