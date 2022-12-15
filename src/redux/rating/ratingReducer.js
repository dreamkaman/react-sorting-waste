import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const allRatings = createReducer([], {
  'allWastePointRatings/get/pending': () => [],
  'allWastePointRatings/get/fulfilled': (_, { payload }) => [...payload.successObject],
  'allWastePointRatings/get/rejected': () => [],
});

const wastePointRating = createReducer(null, {
  'wastePointRating/post/pending': () => null,
  'wastePointRating/post/fulfilled': () => null,
  'wastePointRating/post/rejected': (_, action) => action?.error?.message,

  'wastePointRating/get/pending': () => null,
  'wastePointRating/get/fulfilled': (_, { payload }) => ({ ...payload.successObject }),
  'wastePointRating/get/rejected': () => null,
});

const isLoading = createReducer(false, {
  'wastePointRating/get/pending': () => true,
  'wastePointRating/get/fulfilled': () => false,
  'wastePointRating/get/rejected': () => false,

  'wastePointRating/post/pending': () => null,
  'wastePointRating/post/fulfilled': () => null,
  'wastePointRating/post/rejected': (_, action) => action?.error?.message,

  'allWastePointRatings/get/pending': () => true,
  'allWastePointRatings/get/fulfilled': () => false,
  'allWastePointRatings/get/rejected': () => false,
});

const error = createReducer(null, {
  'wastePointRating/get/pending': () => null,
  'wastePointRating/get/fulfilled': () => null,
  'wastePointRating/get/rejected': (_, action) => action?.error?.message,

  'wastePointRating/post/pending': () => null,
  'wastePointRating/post/fulfilled': () => {
    toast.success('Thank you for feedback!', {
      autoClose: 2300,
    });
    return null;
  },
  'wastePointRating/post/rejected': (_, action) => action?.error?.message,

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
