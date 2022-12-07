import { combineReducers, createReducer } from '@reduxjs/toolkit';

const ratingObject = createReducer(null, {
  'wastePointRating/get/pending': () => null,
  'wastePointRating/get/fulfilled': (_, { payload }) => ({ ...payload.successObject }),
  'wastePointRating/get/rejected': () => null,
});

const isLoading = createReducer(false, {
  'wastePointRating/get/pending': () => true,
  'wastePointRating/get/fulfilled': () => false,
  'wastePointRating/get/rejected': () => false,
});

const error = createReducer(null, {
  'wastePointRating/get/pending': () => null,
  'wastePointRating/get/fulfilled': () => null,
  'wastePointRating/get/rejected': (_, action) => action?.error?.message,
});

export const ratingReducer = combineReducers({
  ratingObject,
  isLoading,
  error,
});
