import { combineReducers, createReducer } from '@reduxjs/toolkit';

const allRatings = createReducer([], {
  'allWastePointRatings/get/pending': () => [],
  'allWastePointRatings/get/fulfilled': (_, { payload }) => [...payload.successObject],
  'allWastePointRatings/get/rejected': () => [],
});

const wastePointRating = createReducer(null, {
  'wastePointRating/get/pending': () => null,
  'wastePointRating/get/fulfilled': (_, { payload }) => ({ ...payload.successObject }),
  'wastePointRating/get/rejected': () => null,
});

const isLoading = createReducer(false, {
  'wastePointRating/get/pending': () => true,
  'wastePointRating/get/fulfilled': () => false,
  'wastePointRating/get/rejected': () => false,

  'allWastePointRatings/get/pending': () => true,
  'allWastePointRatings/get/fulfilled': () => false,
  'allWastePointRatings/get/rejected': () => false,
});

const error = createReducer(null, {
  'wastePointRating/get/pending': () => null,
  'wastePointRating/get/fulfilled': () => null,
  'wastePointRating/get/rejected': (_, action) => action?.error?.message,

  'allWastePointRatings/get/pending': () => null,
  'allWastePointRatings/get/fulfilled': () => null,
  'allWastePointRatings/get/rejected': (_, action) => action?.error?.message,
});

export const ratingReducer = combineReducers({
  allRatings,
  wastePointRating,
  isLoading,
  error,
});
