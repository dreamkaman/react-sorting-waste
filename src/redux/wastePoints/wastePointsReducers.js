import { createReducer, combineReducers } from '@reduxjs/toolkit';

const entities = createReducer([], {
  'wastePoints/getFiltered/pending': (_state, _action) => [],
  'wastePoints/getFiltered/fulfilled': (_state, { payload }) => [...payload?.successObject],
  'wastePoints/getFiltered/rejected': (state, _action) => state,
});

const isLoading = createReducer(false, {
  'wastePoints/getFiltered/pending': (_state, _action) => true,
  'wastePoints/getFiltered/fulfilled': (_state, _action) => false,
  'wastePoints/getFiltered/rejected': (_state, _action) => false,
});

const error = createReducer(null, {
  'wastePoints/getFiltered/pending': (_state, _action) => null,
  'wastePoints/getFiltered/rejected': (_state, action) => action?.error?.message,
});

export const wastPointsReducer = combineReducers({
  entities,
  isLoading,
  error,
});
