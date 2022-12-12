import { createReducer, combineReducers } from '@reduxjs/toolkit';

const entities = createReducer([], {
  'wastePoints/getFiltered/pending': () => [],
  'wastePoints/getFiltered/fulfilled': (_, { payload }) => [...payload?.successObject],
  'wastePoints/getFiltered/rejected': (state) => state,
  'wastePoint/post/pending': (state) => state,
  'wastePoint/post/fulfilled': (state, { payload }) => [...state, payload?.successObject],
  'wastePoint/post/rejected': (state) => state,
});

const isLoading = createReducer(false, {
  'wastePoints/getFiltered/pending': () => true,
  'wastePoints/getFiltered/fulfilled': () => false,
  'wastePoints/getFiltered/rejected': () => false,

  'wastePoint/post/pending': () => true,
  'wastePoint/post/fulfilled': () => false,
  'wastePoint/post/rejected': () => false,
});

const error = createReducer(null, {
  'wastePoints/getFiltered/pending': () => null,
  'wastePoints/getFiltered/fulfilled': () => null,
  'wastePoints/getFiltered/rejected': (_, action) => action?.error?.message,

  'wastePoint/post/pending': () => null,
  'wastePoint/post/fulfilled': () => null,
  'wastePoint/post/rejected': () => (_, action) => action?.error?.message,
});

export const wastPointsReducer = combineReducers({
  entities,
  isLoading,
  error,
});
