import { createReducer, combineReducers } from '@reduxjs/toolkit';

const entities = createReducer([], {
  'wastePoints/getFiltered/pending': () => [],
  'wastePoints/getFiltered/fulfilled': (_, { payload }) => [...payload?.successObject],
  'wastePoints/getFiltered/rejected': (state) => state,
});

const isLoading = createReducer(false, {
  'wastePoints/getFiltered/pending': () => true,
  'wastePoints/getFiltered/fulfilled': () => false,
  'wastePoints/getFiltered/rejected': () => false,
});

const error = createReducer(null, {
  'wastePoints/getFiltered/pending': () => null,
  'wastePoints/getFiltered/rejected': (_, action) => action?.error?.message,
});

export const wastPointsReducer = combineReducers({
  entities,
  isLoading,
  error,
});
