import { combineReducers, createReducer } from '@reduxjs/toolkit';

const entities = createReducer([], {
  'services/get/pending': (_state, _action) => [],
  'services/get/fulfilled': (_state, { payload }) => [...payload?.successObject],
  'services/get/rejected': (state, _action) => state,
  'service/signup/pending': (state, _action) => state,
  'service/signup/fulfilled': (state, { payload }) => [...state, ...payload?.successObject],
  'service/signup/rejected': (state, _action) => state,
  'service/delete/pending': (state, _action) => state,
  'service/delete/fulfilled': (_state, action) => {
    console.log(action);
  },
  'service/delete/rejected': (state, _action) => state,
});

const isLoading = createReducer(false, {
  'services/get/pending': (_state, _action) => true,
  'services/get/fulfilled': (_state, _action) => false,
  'services/get/rejected': (_state, _action) => false,
  'service/signup/pending': (_state, _action) => true,
  'service/signup/fulfilled': (_state, _action) => false,
  'service/signup/rejected': (_state, _action) => false,
});

const error = createReducer(null, {
  'services/get/pending': (_state, _action) => null,
  'services/get/rejected': (_state, action) => action?.error?.message,
  'service/signup/pending': (_state, _action) => null,
  'service/signup/rejected': (_state, action) => action?.error?.message,
});

export const servicesReducer = combineReducers({
  entities,
  isLoading,
  error,
});
