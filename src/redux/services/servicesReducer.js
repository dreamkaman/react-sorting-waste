import { combineReducers, createReducer } from '@reduxjs/toolkit';

const entities = createReducer([], {
  'services/get/pending': () => [],
  'services/get/fulfilled': (_, { payload }) => [...payload?.successObject],
  'services/get/rejected': (state) => state,
  'service/signup/pending': (state) => state,
  'service/signup/fulfilled': (state, { payload }) => [...state, ...payload?.successObject],
  'service/signup/rejected': (state) => state,
  'service/delete/pending': (state) => state,
  'service/delete/fulfilled': (_state, { payload }) => {
    // const { }
    console.log(payload);
  },
  'service/delete/rejected': (state) => state,
});

const isLoading = createReducer(false, {
  'services/get/pending': () => true,
  'services/get/fulfilled': () => false,
  'services/get/rejected': () => false,
  'service/signup/pending': () => true,
  'service/signup/fulfilled': () => false,
  'service/signup/rejected': () => false,
});

const error = createReducer(null, {
  'services/get/pending': () => null,
  'services/get/rejected': (_, action) => action?.error?.message,
  'service/signup/pending': () => null,
  'service/signup/rejected': (_, action) => action?.error?.message,
});

export const servicesReducer = combineReducers({
  entities,
  isLoading,
  error,
});
